import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import * as ReactBootStrap from "react-bootstrap"
import Api from './Api'
import Search from './SearchBar';
//import EmployeeData from "./EmployeeData"


class App extends Component {
  render(){
  // const employeeComponent = EmployeeData.map( employee => <Table key ={employee.id} name ={employee.name} />)
  // console.log(employeeComponent)
  return (
    <div>
      <Search />
      <Api />
    </div>
  );
  }
}

export default App;
