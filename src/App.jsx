import { useState } from "react";
import "./App.css"
import "./header/header.css"
import {Header} from "./header/header";
import "./recommended/recommended.css"
import {Recommended} from "./recommended/recommended";

function App() {
  return (
    <div className="container">
      <Header />
      <Recommended />
    </div>
  );
}

export default App;
