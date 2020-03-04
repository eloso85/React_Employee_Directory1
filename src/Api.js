import React, {Component} from "react"
import Axios from "axios"

class Api extends Component {
    
        
        state ={
            character:[]
            
        }
    
    componentDidMount(){
       Axios.get('https://randomuser.me/api/?results=50') 
       .then((res)=>{
            console.log(res)
            const repos= res.data.results
            console.log(repos)
            this.setState({character:repos})
            
       })
       
    }
    render(){
        return(
            <div>
                {this.state.character.map(person => (
                    
                    <div key = {person.login.uuid}>
                   
                        <div>{person.name.first}</div> 
                        <img src ={person.picture.large} alt=""/>
                   </div>
                
                
                ))}
            </div>
        )
    }
    
}

export default Api