import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
//import EmployeeData from "./EmployeeData"

function Table(props){
    
    return (
        <div>
            <ReactBootStrap.Table responsive>
              
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Postion</th>
      <th>Department</th>
      <th>Salary</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td></td>
      <td>{props.name}</td>
      <td>{props.postion}</td>
      <td>{props.department}</td>
      <td>{props.salary}</td>
     
    </tr>
   
  </tbody>
</ReactBootStrap.Table>
        </div>
    )
}

export default Table