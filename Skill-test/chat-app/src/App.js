import './App.scss';
import { Home } from './pages/Home/home';
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';

import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { currentUser } = useContext(AuthContext);

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
