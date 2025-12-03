function CharacterCard({ character }) {
  const placeholder =
    "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Sin+imagen";

  return (
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
  );
}

export default CharacterCard;
