import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
            name: "Abhijeet",
            lastName: "Kumar"
        }
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    componentDidMount(){
        document.title = this.state.name + " " + this.state.lastName;
    }
    componentDidUpdate(){
        document.title = this.state.name + " " + this.state.lastName;
    }
    render(){
        return(
            <>
            <div className="section">
                    <Row label="Name">
                        <input value={this.state.name}
                        onChange={this.handleName}/>
                    </Row>
                    <Row label="Last Name">
                        <input value={this.state.lastName}
                        onChange={this.handleLastName}/>
                    </Row>
            </div>
            <h2>Hello,</h2>
            </>
        )
    }
    
}

function Row(props){
    const {label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        </>
    )
}