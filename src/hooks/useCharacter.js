import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
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

// const GET_TRACK = gql`
//    query {
//      track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
//        name
//        artists {
//          name
//        }
//        album {
//          name
//       }
//     }
//    }
//  `;

export const useCharacter = () => {
  const { error, data, loading } = useQuery(GET_CHARACTER);

  return {
    error,
    loading,
    data,
  };
};

// export const useCharacter = () => {
//     const { error, data, loading } = useQuery(
//         GET_TRACK,
//         // { errorPolicy: "all" }
//         {
//           context: {
//             headers: {
//         //       "Content-Type": "text/plain",
//         //       // "application/json",
//         //       // "X-Method-Used": "graphiql",
//               "Access-Control-Allow-Origin": "*",
//         //       // mode: "no-cors",
//         //        // "authorization": "BQCpvLHpmxK3I6QI9AFWTFhlHaJHpLXknoruJOefVL9c9i868BrRjx9EszRHXwHgg4-i1oQTOwLoa18m3-i81SpK53twJegssxWjGsU2eo7IoXHqVFkIxYOEi0gviG0vp3xkLTLdtMwnGd_ogodEoWjbppcnpge3vdOe3h3liOrhSjodbdg0",
//             }
//           }
//         }
//       );

//       return {
//           error, loading, data
//       }

// }












// const GET_TRACK = gql`
//   query {
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
// `;

// export const useCharacter = () => {
//     const { error, data, loading } = useQuery(
//         GET_TRACK,
//         // { errorPolicy: "all" }
//         {
//           context: {
//             headers: {
//         //       "Content-Type": "text/plain",
//         //       // "application/json",
//         //       // "X-Method-Used": "graphiql",
//               "Access-Control-Allow-Origin": "*",
//         //       // mode: "no-cors",
//         //        // "authorization": "BQCpvLHpmxK3I6QI9AFWTFhlHaJHpLXknoruJOefVL9c9i868BrRjx9EszRHXwHgg4-i1oQTOwLoa18m3-i81SpK53twJegssxWjGsU2eo7IoXHqVFkIxYOEi0gviG0vp3xkLTLdtMwnGd_ogodEoWjbppcnpge3vdOe3h3liOrhSjodbdg0",
//             }
//           }
//         }
//       );

//       return {
//           error, loading, data
//       }

// }
