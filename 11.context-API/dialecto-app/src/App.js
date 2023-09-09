import "./styles.css";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { getThemeValue } from "./themeContext";

export default function App() {
  const { theme } = getThemeValue();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}
