import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

export default function Search() {
  const [name, setName] = useState("");

  const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocation($name: String!) {
      characters(filter: { name: $name }) {
        results {
          location {
            name
          }
        }
      }
    }
  `;

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  console.log({ loading, error, data, called });
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
      <button onClick={() => getLocations()}>Search </button>

      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
