import "./styles/App.scss";

function App() {
  return (
    <div>
      {/* CABECERA */}
      <header className="header">
        <h1 className="title">Listado de personajes</h1>
      </header>

      {}
      <main className="main">
        <form className="form">
          {/* INPUT 1 → BUSCAR POR PERSONAJE */}
          <label htmlFor="filter" className="label">
            Busca por personaje:
          </label>
          <input
            type="text"
            name="filter"
            id="filter"
            className="input"
            placeholder="Ej.: Harry, Hermione..."
          />

          {/* INPUT 2 → SELECCIONAR CASA */}
          <label htmlFor="house" className="label">
            Selecciona la casa:
          </label>
          <select id="house" name="house" className="input">
            <option value="">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>
      </main>
    </div>
  );
}

export default App;
