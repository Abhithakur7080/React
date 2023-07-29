/* javascript code create elements */
// const maindiv = document.getElementById("root");

// const div = document.createElement('div');

// const h1 = document.createElement('h1');
// h1.textContent = "Hello";
// h1.className = "header";

// const p = document.createElement('p');
// p.textContent = "welcome to the session";
// p.className = "para";

// const button = document.createElement('button');
// button.textContent = "click";
// button.className = "btn";

// div.append(h1);
// div.append(p);
// div.append(button);

// maindiv.append(div);

/* React code create elements */

// const reactHeading = React.createElement("h1", {className:"head", id:"reactHead", children:"Hello React!"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// const image = React.createElement("img", { src:"https://files.codingninjas.in/coding-ninjas-24647.png"});

// ReactDOM.createRoot(document.getElementById("root")).render(image);

/* React with JSX */

// const jsxHeading = <div>
//                       <h1>Hello JSX</h1>
//                       <p>This is created using JSX</p>
//                    </div>

// ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);


// if do not use any div container
// const jsxHeading = <React.Fragment>
//                       <h1>Hello JSX</h1>
//                       <p>This is created using JSX</p>
//                    </React.Fragment>
// const jsxHeading = <>
//                       <h1>Hello JSX</h1>
//                       <p>This is created using JSX</p>
//                    </>

// ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);

// above all are variable not any components

// functional components
// function App(){
//     return(
//         <>
//             <h1>Hello JSX</h1>
//             <p>This is created using JSX</p>
//         </>
//     )
// }
// function App(){
//     return (
//         <>
//         <h1>React Project</h1>
//         <p>Skills used to make this project</p>
//         <ol type="1">
//             <li>HTML</li>
//             <li>javaScript</li>
//             <li>CSS</li>
//         </ol>
//         </>
//     )
// }

const App = () => (
            <>
            <h1>React Project</h1>
            <p>Skills used to make this project</p>
            <ol type="1">
                <li>HTML</li>
                <li>javaScript</li>
                <li>CSS</li>
            </ol>
            </>
)
const Name = () => (
    <>
    <h5>Created by: Abhijeet kumar</h5>
    </>
)
// ReactDOM.createRoot(document.getElementById('root')).render(App());
ReactDOM.createRoot(document.getElementById('root')).render(<><App/><Name/></>);//same here
