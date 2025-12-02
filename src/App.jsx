import "./styles/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Listado</h1>
      </header>
      <main className="main">
        <form>
          <input
            type="text"
            name="filter"
            id="filter"
            className="input"
            placeholder="Escribe para filtrar"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
