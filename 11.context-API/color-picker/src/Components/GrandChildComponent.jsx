// import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = () => {
    // const color = useContext(colorContext);
    // const value = useContext(colorContext);

    // console.log(color);
    // console.log(value);

    return(
        // <p style={{color: color}}>color: {color}</p>
        // <p style={{color: value.color}}>color: {value.color}</p>

        <colorContext.Consumer>
            {(value) => <p style={{color: value.color}}>color: {value.color}</p>}
        </colorContext.Consumer>
        
    )
}
export default GrandChildComponent;