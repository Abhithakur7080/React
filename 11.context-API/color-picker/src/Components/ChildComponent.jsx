import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => (
    <div
    style={{
        border: "10px solid #000000",
        marginLeft: "50px",
        padding: "10px",
        fontSize: "30px",
        width: "300px"
    }}
    >
        <GrandChildComponent />
    </div>
);
export default ChildComponent;