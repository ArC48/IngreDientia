import React, { Component } from "react";
import logo from '../assets/logo.png'
import "./Home.css"
export default class Home extends Component {
  render() {
    return <div>
        <div>
          <div className="App text-white flex-center-row header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="headerText">Ingredientia</h1>
          </div>
          <div className="inputContainer">
            <input className="inputElement"/>
          </div>
        </div>
    </div>;
  }
}
