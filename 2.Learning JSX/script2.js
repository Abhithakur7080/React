//and operater = first-falsy && last truty value
// ex- "Hello" + true
        // true
//or operater = first-truty || last falsy value
// ex- "Hello" + true
        // "Hello"

// function App(){
//     let loggedIn = true;

//     return(
//         <>
//         <h1>Hello {loggedIn?"Alexa":"user"}!</h1>
//         {loggedIn && <p>Welcome to the portal</p>}
//         </>
//     )
// };
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// const IMAGES = [
//     "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
//     "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
//     "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
//     "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg"
//   ];

//   const Login = () => (
//     <div>
//       <h3>Login to Continue</h3>
//       <form>
//         <input placeholder="email" />
//         <input placeholder="password" />
//         <button>Login</button>
//       </form>
//     </div>
//   );

//   const Home = () => (
//     <div>
//       <h3>Welcome to home!</h3>
//       <h5>Enjoy this catalog of pictures</h5>
//       {IMAGES.map((i) => (
//         <img key={i} src={i} />
//       ))}
//     </div>
//   );

//   const App = () => {
//     // create variable here
//     let loggedIn = true;
    
//     // return with ternary operator here
//     return(
//     <>
//     {loggedIn?<Home/>:<Login/>}
//     </>
//     )
//   };

//   const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//   rootElement.render(<App />);


const timeTable = {
    Monday: {
      9: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      10: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour"
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour"
      }
    },
    Tuesday: {
      9: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "Environtal Studies",
        teacher: "Rakesh Prakash",
        time: "1 hour"
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      14: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      15: {
        subject: "Physics Practical",
        teacher: "Sumit Yadav",
        time: "1 hour"
      }
    },
    Wednesday: {
      9: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      10: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour"
      },
      11: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      15: {
        subject: "Chemistry Practical",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      }
    },
    Thursday: {
      9: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      13: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      15: {
        subject: "Biology Practical",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      }
    },
    Friday: {
      9: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour"
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour"
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour"
      }
    }
  };

const App = () => (
    <table border="1">
      <caption>School time-table of a class 12th Student.</caption>
      <thead>
        <tr>
        <th></th>
        <th>9am-10am</th>
        <th>10am-11am</th>
        <th>11am-12noon</th>
        <th>12noon-1pm</th>
        <th>1pm-2pm</th>
        <th>2pm-3pm</th>
        <th>3pm-4pm</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(timeTable).map((day) => (
        <tr key={day}>
          <th>{day}</th>
          <td>{timeTable[day][9].subject}</td>
          <td>{timeTable[day][10].subject}</td>
          <td>{timeTable[day][11].subject}</td>
          <td>Break</td>
          <td>{timeTable[day][13].subject}</td>
          <td>{timeTable[day][14].subject}</td>
          <td>{timeTable[day][15].subject}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );

  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App />);