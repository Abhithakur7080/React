import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  // Use the custom hook here
  const {data, loading, error, fetchData} = useFetch(url);
  // Display loading text here
  // Display something went wrong here

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {data && <h2>{data.value}</h2>}
      <button className="btn" onClick={fetchData}>New Joke</button>
    </div>
  );
}
