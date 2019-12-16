import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import Card from "./Card";

const DivStyled = styled.div`
  border: 1px solid red;
  margin: 20px 20px;
  padding: 20px 20px;
  .list {
    margin: 10px;
  }
`;

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
      <DivStyled className="players">
        {this.state.players.map(player => (
          <ul>
            <li className="list" key={player.id}>
              {player.name} <br />
              Country: {player.country} <br />
              Google Popularity by no. searches:
              {player.searches}
              <br />
            </li>
          </ul>
        ))}
      </DivStyled>
    );
  }
}
// Functional component with state and hooks

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
