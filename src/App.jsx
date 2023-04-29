import { useState } from "react";
import "./App.css"
import "./header/header.css"
import {Header} from "./header/header";
import "./content/content.css"
import {Content} from "./content/content";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
