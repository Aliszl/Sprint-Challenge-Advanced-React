import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "./Card";

export default function WorldcupData() {
  const [users, fetchUsers] = useState([]);

  useEffect(() => {
    console.log("WorldcupData component mounted");

    axios
      .get("http://localhost:5000/api/players")

      .then(response => {
        console.log(response);
        console.log(response.data);

        fetchUsers(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
      {users.map(user => {
        return <li key={user.name}>{user.name}</li>;
      })}
    </div>
  );
}

// export default class Worldcup extends React.Component {
//   state = {
//     users: []
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/players")
//       .then(response => {
//         console.log(response);
//         console.log(response.data);
//         this.setState({ users: response.data });
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.users.map(user => (
//           <li key={user.name}>{user.name}</li>
//         ))}
//       </div>
//     );
//   }
// }
// <ul>
//   {this.state.users.map(user => (
//     <li key={user.name}>{user.name}</li>
//   ))}
// </ul>;
