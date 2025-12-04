import { useParams, Link } from "react-router-dom";

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const character = characters[id];

  if (!character) {
    return (
      <div className="detail">
        <p>Personaje no encontrado.</p>
        <Link to="/">← Volver al listado</Link>
      </div>
    );
  }

  const placeholder =
    "https://placehold.co/210x295/ffffff/666666/?text=Sin+imagen";

  return (
    <div className="detail">
      <Link to="/" className="back">
        ← Volver al listado
      </Link>

      <img
        src={character.image || placeholder}
        alt={character.name}
        className="detail-img"
      />

      <h2>{character.name}</h2>
      <p>
        <strong>Casa:</strong> {character.house || "Desconocida"}
      </p>
      <p>
        <strong>Estado:</strong>{" "}
        {character.alive ? (
          <span className="alive">🟢 Vivo</span>
        ) : (
          <span className="dead">🔴 Muerto</span>
        )}
      </p>
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Especie:</strong> {character.species}
      </p>
      <p>
        <strong>Nombres alternativos:</strong>{" "}
        {character.alternate_names?.length
          ? character.alternate_names.join(", ")
          : "Ninguno"}
      </p>
    </div>
  );
}

export default CharacterDetail;
