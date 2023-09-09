import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";

// get theme and language contexts here
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <languageContext.Provider value={{ language, setLanguage }}>
        <div className={`App ${theme}`}>
          <Navbar />
          <Home />
        </div>
      </languageContext.Provider>
    </themeContext.Provider>

  );
}
