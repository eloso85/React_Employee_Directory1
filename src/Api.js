import React, {Component} from "react"
import Axios from "axios"
import * as ReactBootStrap from "react-bootstrap"
//import * as ReactBootStrap from "react-bootstrap"
class Api extends Component {
    
        
        state ={
            image:'',
            firstName:[],
            lastName:'',
            email:''
            
        }
    
    componentDidMount(){
       Axios.get('https://randomuser.me/api/?results=10') 
       .then((res)=>{
            console.log(res)
            const fname= res.data.results.map(employee => employee=<div>{employee.name.first}</div>)
            const lname= res.data.results.map(employee => employee=<td>{employee.name.last}</td>)
            const image= res.data.results.map(employee => employee=<td><img src={employee.picture.medium} alt=''/></td>)
            const email= res.data.results.map(employee => employee=<div>{employee.email}</div>)
            console.log(fname)
            this.setState({firstName:fname})
            this.setState({lastName:lname})
            this.setState({image:image})
            this.setState({email:email})
            console.log(this.state.firstName)
       })
       
    }
    render(){
        
        return(
            <div>
                
                <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Last Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
 
<tbody>
    <tr>
      
     
     <td key={1}>{this.state.firstName}</td>
     
      </tr>
</tbody>         
     </ReactBootStrap.Table>            
                 

                    
            </div>
        )
    }
    
}

export default Api