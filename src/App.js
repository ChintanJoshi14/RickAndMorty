import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route strict exact path="/" element={<CharacterList />}></Route>
          <Route strict exact path="/search" element={<Search />}></Route>
          <Route strict exact path="/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import { SpotifyGraphQLClient } from 'spotify-graphql/dist';
// const spotify_graphql = require('spotify-graphql');
// let config = SpotifyGraphQLClient({
//     clientId: "211e5ba2a08c4fb19a6a749cdf1f10e3",
//       clientSecret: "f23e41021c8945078b19cd757c0235fb",
//       redirectUri: "http://localhost:3000/",
//       accessToken: "accessToken"
//   })

//   spotify_graphql.SpotifyGraphQLClient(config).query(`
//   {
//     track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
//       name
//       artists {
//         name
//       }
//       album {
//         name
//       }
//     }
//   }
// `).then(executionResult => {
//   if (executionResult.errors) {
//     console.log('error');
//     console.error(JSON.stringify(executionResult.errors));
//   } else {
//     console.log('success');
//     console.log(JSON.stringify(executionResult.data));
//   }
// })
