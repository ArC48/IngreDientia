import React, { Component } from "react";
import "./App.css";
import Default from "./pages/Default";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <div>
      <Home />
      <SingleRecipe />
      <Favorites />
      <Default />
    </div>
  );
}

export default App;
