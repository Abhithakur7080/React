import { useState } from "react";

export default function Input(){
    const [name, setName] = useState("Abhi");
    const [lastName, setLastName] = useState("Thakur");
    return(
        <>
        <div className="section">
            <Row label="Name">
                {/* implement useState */}
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Row>
            <Row label="Last Name">
                <input value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </Row>
        </div>
        <h2>Hello, {name + " " + lastName}</h2>
        </>
    )
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