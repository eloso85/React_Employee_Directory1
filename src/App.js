import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import * as ReactBootStrap from "react-bootstrap"
import Table from './Table'
import EmployeeData from "./EmployeeData"


function App() {
  const employeeComponent = EmployeeData.map( employee => <Table key ={employee.id} name ={employee.name} />)
  return (
    <div>
      {employeeComponent}
    </div>
  );
}

export default App;
