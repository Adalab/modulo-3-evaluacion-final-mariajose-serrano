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

  
