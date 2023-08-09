import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form style={style.form}>
        <h3 style={style.heading}>Sign Up</h3>
        <input style={style.input} placeholder="Username" />
        <input style={style.input} placeholder="Email" />
        <input style={style.input} placeholder="Password" />

        <div style={style.buttonContainer}>
          <button style={style.button}>Cancel</button>
          <button style={style.button}>Login</button>
        </div>
      </form>
    </div>
  );
}

const style = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  heading: {
    fontSize: "2rem",
    letterSpacing: 2
  },
  input: {
    padding: 10
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
