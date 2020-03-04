import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Api from "./Api"
//import EmployeeData from "./EmployeeData"
console.log(Api)
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
      <td>{Api.name}</td>
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