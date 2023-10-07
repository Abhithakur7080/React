import React from 'react';
import ReactDOM from 'react-dom/client';
//GETTING INDEX STYLES
import './index.css';
//GETTING APP COMPONENTS
import App from './App';
//GETTING TOAST COMPONENT
import { ToastContainer} from 'react-toastify';
//GETTING TOAST STYLES
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ToastContainer/>
    <App />
  </React.Fragment>
);
