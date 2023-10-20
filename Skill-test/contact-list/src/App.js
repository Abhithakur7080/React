import { Provider } from "react-redux"
import './App.css';
import { store } from "./Redux/store";
import { Home } from "./page/home";
import { Add } from "./page/add";
import { Update } from "./page/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
