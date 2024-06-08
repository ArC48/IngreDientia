import React, { Component } from "react";
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.png'
import "./Home.css"
import Input from "../components/Input/Input";
import Select from "react-select";
import MultiSelectInput from "../components/multiselect/multiselect";

export default class Home extends Component {
  render() {
    return <div>
        <div>
          <div className="App text-white flex-center-row header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="headerText">Ingredientia</h1>
          </div>
          <div className="mainContainer">
            <img src={hamburger} className="hamburgerPic" draggable='false'/>
            {/* <Input className="inputElement"
              placeholder="Find by your ingredient..."
            /> */}
            <div>
              <MultiSelectInput />
            </div>
          </div>
        </div>
    </div>;
  }
}
