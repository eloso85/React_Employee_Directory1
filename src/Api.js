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
      <th>#</th>
      <th>Picture</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>email</th>
      
    </tr>
  </thead>
 
<tbody>
  {this.state.results.map( person => {
  return <tr>
      <td>1</td>   
      <td><img src={person.picture.medium}/></td>
      <td>{person.name.first}</td>
      <td>{person.name.last}</td>
      <td>{person.email}</td>
     </tr>

})}
  </tbody>         
     </ReactBootStrap.Table>            
                 

                    
            </div>
        )
    }
    
}

export default Api