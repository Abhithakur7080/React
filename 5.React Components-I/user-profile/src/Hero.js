import { Component } from "react";

let name = "Pranav Sharad Yeole";
let email = "pranav@google.com";
let phone = "8546465544";
let address = "ABC, XYZ street."

export default class Hero extends Component{
    render() {
        return (
            <div className="hero">
                <div className="info">
                    <span><b>Name: </b></span>
                    <span><b>{name}</b></span>
                </div>
                <div className="info">
                    <span>Email: </span>
                    <span>{email}</span>
                </div>               
                <div className="info">
                    <span>Phone: </span>
                    <span>{phone}</span>
                </div>               
                <div className="info">
                    <span>Address: </span>
                    <span>{address}</span>
                </div>
            </div>
        )
    }
}
