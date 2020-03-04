import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
//import EmployeeData from "./EmployeeData"

function Table(){
    
    return (
        <div>
            <ReactBootStrap.Table responsive>
              
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Postion</th>
      <th>Department</th>
      <th>Salary</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
   
  </tbody>
</ReactBootStrap.Table>
        </div>
    )
}

export default Table