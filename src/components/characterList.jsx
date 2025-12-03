import CharacterCard from "./characterCard";

function CharacterList({ characters }) {
  return (
    <section className="characters-grid">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </section>
  );
}

export default CharacterList;
