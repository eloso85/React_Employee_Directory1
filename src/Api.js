import React, {Component} from "react"
import Axios from "axios"
import * as ReactBootStrap from "react-bootstrap"
//import * as ReactBootStrap from "react-bootstrap"
class Api extends Component {
    
        
        state ={
           results:[]
          
            
        }
    
    componentDidMount(){
       Axios.get('https://randomuser.me/api/?results=10') 
       .then((res)=>{
         console.log(res.data.results[0])
          this.setState({
            results: res.data.results
          })
       })
       
    }
    render(){
        
        return(
            <div>
                
                <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Picture</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Username</th>
      
    </tr>
  </thead>
 
<tbody>
  {this.state.results.map( person => {
  return <tr key = {person.login.uuid}>
        
      <td><img src={person.picture.thumbnail} alt=""/></td>
      <td>{person.name.first}</td>
      <td>{person.name.last}</td>
      <td>{person.dob.age}</td>
      <td>{person.email}</td>
      <td>{person.login.username}</td>
     </tr>

})}
  </tbody>         
     </ReactBootStrap.Table>            
                 

                    
            </div>
        )
    }
    
}

export default Api