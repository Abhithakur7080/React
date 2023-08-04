import "./styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
