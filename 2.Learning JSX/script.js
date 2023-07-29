const car = document.getElementById('car');
const item = document.getElementById('item');
const student = document.getElementById('student');


// function App(){
//     var name = "Alexa"
//     var age = 10
//     let demo = null
//     let ud = undefined
//     let bool = true
//     return(
//         <>
//         <h1>Let's learn JSX!!</h1>
//         <h3>Hey {name}!</h3>
//         <h3>Age: {age}</h3>
//         <h3>demo: {String(demo)}</h3>
//         <h3>undefined: {String(ud)}</h3>
//         <h3>Boolean: {String(bool)}</h3>
//         </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// const App = () => {

//     const name = "Demo";
//     const age = 18;
//     const hobby = "JavaScript";
//     const isMarried = false;

//     return (
//       <>
//       <h1>{name}'s basic info:</h1>
//       <p>My age is {age}.</p>
//       <p>I like {hobby} a lot!</p>
//       <p>Am i married?: {String(isMarried)}</p>
//       </>
//     );
//   };

//   const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//   rootElement.render(<App />);



// function App(){
//     const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const evenNumbers = array.filter((number) => number%2===0)
//     return (
//         <>
//             <h1>ES6 Array Iteration Methods</h1>
//             {evenNumbers.map((number) => <h3>{number}</h3>)}
//         </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// const App = () => {
//     let cars = ["BMW", "Audi", "Nexa", "Honda", "Maruti"];
    
//     return(
//         <>
//         <h1>Lists of cars</h1>
//         <ul>
//             {cars.map((car, index) => (<li key={index}>{car}</li>))}
//         </ul>
//         </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

const Student = () => {
    const students = [
        {
            name:"stud1",
            age: 23,
            marks: 50
        },
        {
            name:"stud2",
            age: 25,
            marks: 30
        },
        {
            name:"stud3",
            age: 20,
            marks: 70
        }
    ];

    return (
        <>
        <h1>Student Details(Table)</h1>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) =>
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.marks}</td>
                </tr>)}
            </tbody>
        </table>
        </>
    )
}
// ReactDOM.createRoot(document.getElementById('root')).render(<Student/>);

const Item = () => {
    const itemsSold = [
      { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
      { id: 2, name: "iPad Pro", price: 800, qty: 18 },
      { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
      { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
      { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
    ];

    return (
      <>
        <h1>Record of sold items</h1>
        <table border="1px">
              <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Selling price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
             {itemsSold.map((item) => 
                <tr id={item.id}>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.price}</td>
                   <td>{item.qty}</td>
                </tr>
             )}
        </tbody>
        <tfoot>
        <tr>
        <td>Total Revenue</td>
        <td colspan={3}>$5800</td>
        </tr>
        </tfoot>
        </table>
      </>
    );
  };

//   ReactDOM.createRoot(document.getElementById("root")).render(<Item />);

const Car = () => {
    let cars = [
        {
            image: "./car_images/bmw.jpeg",
            name: "BMW",
            price: 1600000,
            averagespeed: "150km/hr"
        },
        {
            image: "./car_images/Audi.jpg",
            name: "Audi",
            price: 3000000,
            averagespeed: "160km/hr"
        },
        {
            image: "./car_images/nexa.png",
            name: "Nexa",
            price: 700000,
            averagespeed: "100km/hr"
        },
        {
            image: "./car_images/honda.jpeg",
            name: "Honda",
            price: 1200000,
            averagespeed: "110km/hr"
        },
        {
            image: "./car_images/maruti.webp",
            name: "Maruti",
            price: 400000,
            averagespeed: "80km/hr"
        }];
    
        return (
            <>
              <h1>Record of car Details</h1>
              <table border="1px">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Price</th>
                    </tr>
              </thead>
              <tbody>
                   {cars.map((car, index) => 
                      <tr id={index}>
                         <td><img src={car.image} width={"80px"} height={"50px"}></img></td>
                         <td>{car.name}</td>
                         <td>{car.averagespeed}</td>
                         <td>{car.price}</td>
                      </tr>
                   )}
              </tbody>
              </table>
            </>
          );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Car/>);

con
/*                             pending                       */
// function App(){
//     var showcars = false;
//     var showItem = false;
//     var showStudent = false;

//     car.addEventListener('click', () => {
//         showcars = true;
//         showItem = false;
//         showStudent = false;
//         alert("car")
//     });

//     item.addEventListener('click', () => {
//         showcars = false;
//         showItem = true;
//         showStudent = false;
//     });

//     student.addEventListener('click', () => {
//         showcars = false;
//         showItem = false;
//         showStudent = true;
//     })
//     if(showcars){
//         return <Car/>
//     }
//     else if(showItem){
//         return <Item/>
//     }
//     else if(showStudent){
//         return <Student/>
//     }
//     // return (
//     //     <>
//     //     <Car/>
//     //     <Student/>
//     //     </>
//     // )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);