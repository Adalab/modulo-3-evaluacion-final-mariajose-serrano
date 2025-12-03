import { useEffect, useState } from "react";
import "./styles/App.scss";

function App() {
  // lista personajes
  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = useState("");

  const [house, setHouse] = useState("");

  // Llamada a la API al cargar la página
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  // Personajes
  const filteredCharacters = characters
    // filtro por nombre
    .filter((char) => char.name.toLowerCase().includes(search.toLowerCase()))
    // filtro por casa (si no hay casa seleccionada, mostramos todos)
    .filter((char) => (house === "" ? true : char.house === house));

  return (
    <div>
      <header className="header">
        <h1 className="title">Listado de personajes</h1>
      </header>

      <main className="main">
        <form className="form">
          {/* Input 1: filtro por nombre */}
          <label htmlFor="filter" className="label">
            Busca por personaje:
          </label>
          <input
            type="text"
            name="filter"
            id="filter"
            className="input"
            placeholder="Escribe para filtrar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {/* Input2: filtro por casa */}
          <label htmlFor="house" className="label">
            Selecciona la casa:
          </label>
          <select
            id="house"
            name="house"
            className="input"
            value={house}
            onChange={(event) => setHouse(event.target.value)}
          >
            <option value="">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>

        {/* Listado personajes */}
        <section className="characters-grid">
          {filteredCharacters.map((character, index) => {
            const placeholder =
              "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Sin+imagen";

            return (
              <article key={index} className="character-card">
                <img
                  className="character-img"
                  src={character.image || placeholder}
                  alt={character.name}
                />
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <p>{character.species}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
