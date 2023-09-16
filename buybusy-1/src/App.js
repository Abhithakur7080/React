//PAGES
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

//GETTING STYLES
import styles from "./App.module.css";

//ROUTERS
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//CUSTOM CONTEXT
import { UserContextProvider } from "./userContext";
import Cart from "./Components/Cart/cart";
import Order from "./Components/order/order";

import { Helmet } from 'react-helmet';

function App() {



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
        <UserContextProvider>
          <Navbar />
          <Cart />
        </UserContextProvider>
      )
    },
    {
      path: "/orders",
      element: (
        <UserContextProvider>
          <Navbar />
          <Order />
        </UserContextProvider>
      )
    }

  ])
  return (
    <div className={styles.main}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Busy Buy</title>
        <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
      </Helmet>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
