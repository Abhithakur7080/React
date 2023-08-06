import React from "react";

//use of props
// class Student extends React.Component{
//     render(){
//         console.log(this.props);
//         return(
//             <>
//             <h1>Hello, {this.props.stuname}</h1>
//             <p>You have secured {this.props.marks}</p>
//             <hr/>
//             </>
//         )
//     }
// }
function Student(props){
    const {stuname, marks} = props;
    //props.studname = "Alexa";
    //state can be modified but props cannot be modified
    return(
        <>
        <h1>Hello, {stuname}</h1>
        <p>You have secured {marks}</p>
        <hr/>
        </>
    )
}
export default Student;