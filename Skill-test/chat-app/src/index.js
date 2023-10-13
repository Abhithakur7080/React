import React from 'react';
import ReactDOM from 'react-dom/client';

//GETTING INDEX STYLE
import './index.css';

//GETTING APP PAGE
import App from './App';

//GETTING AUTH CONTEXT
import { AuthContextProvider } from './context/authContext';

//GETTING CHAT CONTEXT
import { ChatContextProvider } from './context/chatContext';

//GETTING TOAST COMPONENT
import { ToastContainer} from 'react-toastify';

//GETTING TOAST STYLES
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <ToastContainer/>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>
);