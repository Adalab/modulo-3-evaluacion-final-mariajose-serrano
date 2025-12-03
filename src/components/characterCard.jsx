import { Link } from "react-router-dom";

function CharacterCard({ character, id }) {
  const placeholder =
    "https://placehold.co/210x295/ffffff/666666/?text=Sin+imagen";

  return (
    <Link to={`/character/${id}`} className="card-link">
      <article className="character-card">
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
    </Link>
  );
}

export default CharacterCard;
