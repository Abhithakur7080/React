import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state={
            hasError: false
        }
    }

    static getDerivedStateFromError(Error){
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info){
        console.log("Error:", error);
        console.log("Error info:", info);
    }
    render(){
        if(this.state.hasError){
            return(<>Something Went Wrong!!</>)
        }
        return this.props.children;
    }
}