let score = 0;
let wicket = 0;
let ballwiseResults = [];
let hit=0;
let inputRef = React.createRef();

// function greet(){
//     console.log("Hey there");
//     alert("Hey there");
//     rootElement.render(<App/>);
// }

// function addScore(num){
//     if(wicket<10){
//         ballwiseResults.push(num)
//         score +=num;
//         rootElement.render(<App/>);
//     }
    
// }
// function addWicket(){
//     if(wicket<10){
//         ballwiseResults.push("W")
//         wicket +=1;
//         rootElement.render(<App/>);
//     }
// }

function addScore(num){
    hit = num;
    rootElement.render(<App/>);
    console.log(hit);

}

function addWicket(){
    hit = 'W'
    rootElement.render(<App/>);
    console.log(hit);
}

const ScoreButtons = () => (
    <div>
        <button onClick={() => addScore(0)}>0</button>
        <button onClick={() => addScore(1)}>1</button>
        <button onClick={() => addScore(2)}>2</button>
        <button onClick={() => addScore(3)}>3</button>
        <button onClick={() => addScore(4)}>4</button>
        <button onClick={() => addScore(5)}>5</button>
        <button onClick={() => addScore(6)}>6</button>
        <button onClick={addWicket}>wicket</button>
    </div>
)

// const Result = () => (
//     <div>
//         {ballwiseResults.map((res, index) => (
//         <>
//         {index %6===0?<br/>:null}
//         <span key={index}>{res==0?<strong>.</strong>:res}&nbsp;&nbsp;&nbsp;</span>
//         </>
//         ))}
//     </div>
// )

function handleSubmit(event){
    event.preventDefault();
    if(hit == 'W'){
        wicket+=1;
    }
    else{
        score += hit;
    }
    ballwiseResults.unshift(
        // <span>{hit} {", "} {inputRef.current.value}</span>
        <span>{`${hit}, ${inputRef.current.value}`}</span>
    );
    hit = 0;
    inputRef.current.value = "";
    rootElement.render(<App/>);
}

const Form = () => (
    <form onSubmit={handleSubmit}>
        <input value={hit}/>
        <input ref={inputRef} placeholder="Add a comment..."/>
        <button>Submit</button>
    </form>
)
const App = () => (
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    {/* <button onClick={greet}>say Hi!</button> */}
    <ScoreButtons/>
    <br/>
    <Form/>
    <hr/>
    {ballwiseResults.map((res, index) => (
        <p key={index}>{res}</p>
    ))}
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>);


// let show = false
//       const setShow = () => {
//       show = !show
//       rootElement.render(<App />);
//       };

//       const App = () => (
//         <>
//           <h1>Coding Ninjas</h1>
//           <button onClick={setShow}>{show?"Hide Element Below":"Show Element Below"}</button>
//           {/* {show && <p>Hello ninjas, I am here.</p>} */}
//           {show?<p>Hello ninjas, I am here.</p>:<p></p>}
//         </>
//       );

//       const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//       rootElement.render(<App />);