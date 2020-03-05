import React, { Component } from 'react'
//import * as ReactBootStrap from "react-bootstrap"
import Api from "./Api"
//import EmployeeData from "./EmployeeData"
console.log(Api)

class Table extends Component{
  
  render(){
   
    return(
      <div>
        <Api />
        
      </div>
    )
  }
}

export default Table