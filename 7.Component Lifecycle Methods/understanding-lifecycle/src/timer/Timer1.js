import React from "react";

export default class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time: 0
        };
        this.timer = null;
        console.log("TimerOne Constructor!");
    }
    static getDerivedStateFromProps(){
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.time)
        return nextProps.timerOn !== this.props.timerOn || nextState.time%5===0;
    }
    render(){
        console.log("TimerOne render");
        return(
            <div>
                <h2>
                    Time Spent: 
                    {new Date(this.state.time*1000).toISOString().slice(11,19)}
                </h2>
            </div>
        );
    }
    componentDidMount(){
        console.log("TimerOne componentDidMount");
        console.log("--------------------------");
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Timer getSnapshotBeforeUpdate");
        console.log("--------------------------");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("TimerOne componentDidUpdate");
        // console.log("previous Props:", prevProps);
        // console.log("previous state:", prevState);
        // console.log("snapshot from getSnapshotBeforeUpdate:", snapShot);
        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(() => {
                    this.setState((prevState) => ({ time: prevState.time+1}));
                  },1000);
            }
            else{
                clearInterval(this.timer);
            }
        }

    }
    componentWillUnmount(){
        console.log("TimerOne componentDidUnmount");
        clearInterval(this.timer);  
    }
}