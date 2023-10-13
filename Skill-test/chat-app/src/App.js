//GETTING STYLES
import './App.scss';

//GETTING ALL PAGES
import { Home } from './pages/Home/home';
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';

//GETTING AUTH CONTEXT
import { AuthContext } from './context/authContext';

//GETTING REACT COMPONENT
import { useContext } from 'react';

//GETTING ROUTING COMPONENTS
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  //using current user for rending page
  const { currentUser } = useContext(AuthContext);

  //use protected route not render without login/register
  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return (
      <Navigate to="/login" replace={true}/>
      )
    }
    return children;
  }
  return (
    <Router>
      <Routes>
        <Route index element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
