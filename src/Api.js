import React, {Component} from "react"
import Axios from "axios"
//import * as ReactBootStrap from "react-bootstrap"
class Api extends Component {
    
        
        state ={
            character:[]
            
        }
    
    componentDidMount(){
       Axios.get('https://randomuser.me/api/?results=10') 
       .then((res)=>{
            console.log(res)
            const repos= res.data.results.map(person=> person = {person})
            console.log(repos)
            this.setState({character:repos})
            
       })
       
    }
    render(){
        
        return(
            <div>
                {this.character

                
                /* {this.state.character.map(person => (
                   
                    <div key = {person.login.uuid}>
                        
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img src ={person.picture.large} alt=""/>
                        <div>{person.phone}</div>
                        <div>{person.email}</div>
                   </div>
                   
                ))} */}

                    
            </div>
        )
    }
    
}

export default Api