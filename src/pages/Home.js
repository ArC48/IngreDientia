import React, { Component } from "react";
import logo from '../assets/logo.png'
import "./Home.css"
import Input from "../components/Input/Input";
export default class Home extends Component {
  render() {
    return <div>
        <div>
          <div className="App text-white flex-center-row header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="headerText">Ingredientia</h1>
          </div>
          <div className="inputContainer">
            <Input className="inputElement"
              placeholder="Find by your ingredient..."
            />
          </div>
        </div>
    </div>;
  }
}
