import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: "https://spotify-api-graphql-console.herokuapp.com/",
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode: 'no-cors'
//   },
//   credentials: 'true'
// })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();






// import { SpotifyGraphQLClient } from "spotify-graphql/dist";
// let config = SpotifyGraphQLClient({
//   clientId: "211e5ba2a08c4fb19a6a749cdf1f10e3",
//     clientSecret: "f23e41021c8945078b19cd757c0235fb",
//     redirectUri: "http://localhost:3000/",
//     accessToken: "accessToken"
// })

// const client = new ApolloClient({
//   uri: "https://spotify-api-graphql-console.herokuapp.com/",
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode: 'no-cors'
//   },
//   // credentials: 'true'
// })
