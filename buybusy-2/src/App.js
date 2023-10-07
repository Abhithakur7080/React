//PAGES
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Cart from './Components/Cart/cart';
import Order from "./Components/order/order";

//GETTING STYLES
import styles from "./App.module.css";

import { store } from "./redux/store"

//ROUTERS
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//CUSTOM CONTEXT
import { UserContextProvider } from "./userContext";

//GETTING HELMET FOR APP NAME AND DESCRIPTIONS
import { Helmet } from 'react-helmet';

//GETTING PROVIDER FROM REDUX
import { Provider } from "react-redux";

//GETTING PROVIDER FROM AUTHCONTEXTPROVIDER
import { AuthContextProvider } from "./redux/provider/authContestProvider";

function App() {
  //routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserContextProvider>
          <Navbar />
          <Home />
        </UserContextProvider>
      )
    },
    {
      path: "/login",
      element: (
        <UserContextProvider>
          <Navbar />
          <Login />
        </UserContextProvider>
      )
    },
    {
      path: "/signup",
      element: (
        <UserContextProvider>
          <Navbar />
          <SignUp />
        </UserContextProvider>
      )
    },
    {
      path: "/cart",
      element: (
        <AuthContextProvider>
          <UserContextProvider>
            <Navbar />
            <Cart />
          </UserContextProvider>
        </AuthContextProvider>
      )
    },
    {
      path: "/orders",
      element: (
        <AuthContextProvider>
          <UserContextProvider>
            <Navbar />
            <Order />
          </UserContextProvider>
        </AuthContextProvider>

      )
    }

  ])
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Busy Buy</title>
          <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
        </Helmet>

        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
