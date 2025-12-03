import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/characterDetail";

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

  // Filtros
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
              {/*--- INPUT buscar por nombre ---*/}
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search" className="label">
                  Busca por personaje:
                </label>
                <input
                  id="search"
                  type="text"
                  className="input"
                  placeholder="Ej.: Harry, Hermione..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>

              {/*--- SELECT filtrar por casa ---*/}
              <label htmlFor="house" className="label">
                Selecciona la casa:
              </label>
              <select
                id="house"
                className="input"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
              </select>

              {/*--- LISTADO DE PERSONAJES ---*/}
              <CharacterList characters={filteredCharacters} />
            </main>
          </div>
        }
      />

      {/*  DETALLE  */}
      <Route
        path="/character/:id"
        element={<CharacterDetail characters={characters} />}
      />
    </Routes>
  );
}

export default App;
