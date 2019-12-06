import React, { useState, useEffect } from "react";
import axios from "axios";

// import Card from "./Card";

export default class WorldcupData extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response);
      console.log(response.data);
      this.setState({ players: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.players.map(player => (
          <li key={player.id}>
            {player.name} {player.country} {player.searches}
          </li>
        ))}
      </div>
    );
  }
}

// export default function WorldcupData() {
//   const [players, fetchPlayers] = useState([]);

//   useEffect(() => {
//     console.log("WorldcupData component mounted");

//     axios
//       .get("http://localhost:5000/api/players")

//       .then(response => {
//         console.log(response);
//         console.log(response.data);

//         fetchPlayers(response.data);
//       })
//       .catch(error => {
//         console.log("the data was not returned", error);
//       });
//   }, []);

//   return (
//     <div>
//       {players.map(player => {
//         return (
//           <div>
//             <li key={player.id}>
//               Player:{player.name} Country:
//               {player.country} Searches:{player.searches} ID: {player.id}
//             </li>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
