import React from "react";

class ComponentA extends React.Component{
    constructor(){
        super();

        this.state={
            name: "ComponentA",
            data: []
        }
        console.log("ComponentA Constructor!");
    }
   
    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
           console.log("ComponentA componentDidMount")
           fetch('https://jsonplaceholder.typicode.com/user')//err url users->user
                .then(response => response.json())
                .then(data => this.setState({data}));
    }
    // https://jsonplaceholder.typicode.com/users
    
    render(){
        return(
            <>
            <h2>{this.state.name}</h2>
            <ul>{this.state.data.map((d, i) => {
                return(
                    <li key={i}>{d.username}</li>
                )
            })}
            </ul>
            </>
        )
    }
}
export default ComponentA;