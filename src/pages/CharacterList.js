import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharacterList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

  if (loading) return <div>Loading....</div>;
  if (error) {
    return <div>something went wrong..</div>;
  }
  return (
    <div>
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
