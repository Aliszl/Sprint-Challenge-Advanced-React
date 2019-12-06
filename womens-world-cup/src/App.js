import React from "react";
import "./App.css";
import "./styles.scss";

import WorldcupData from "./components/Worldcupdata";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Womens World Cup</h1>
      <WorldcupData />
    </div>
  );
}

export default App;
