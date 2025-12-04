import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import FilterName from "./components/filterName";
import FilterHouse from "./components/filterHouse";

function App() {
  // Variables de estado
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState("");

  // Fetch
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  // Filtros (no distingue mayúsc/minúsc.)
  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesHouse = house === "" || character.house === house;

    return matchesName && matchesHouse;
  });

  return (
    <Routes>
      {/* LISTADO */}
      <Route
        path="/"
        element={
          <div>
            <header className="header">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Harry_Potter_Golden_logo.png"
                alt=""
              />
            </header>

            <main className="app-container">
              {/* Filtros */}
              <FilterName search={search} setSearch={setSearch} />
              <FilterHouse house={house} setHouse={setHouse} />

              {/* LISTADO DE PERSONAJES */}
              <CharacterList characters={filteredCharacters} />
            </main>
          </div>
        }
      />

      {/* DETALLE */}
      <Route
        path="/character/:id"
        element={<CharacterDetail characters={characters} />}
      />
    </Routes>
  );
}

export default App;
