import React from "react";
import { useCharacter } from "../hooks/useCharacter";



function CharacterList() {
  const {error, loading, data} = useCharacter();


  if (loading) return <div>Loading....</div>;
  if (error) {
    return <div>something went wrong..</div>;
  }
  return (
    <div>
      {/* {data} */}
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt="NOT LOADED" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
