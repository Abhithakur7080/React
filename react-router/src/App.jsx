import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import OrderSummary from "./pages/OrderSummary";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import New from "./components/New";
import Featured from "./components/Featured";
import Users from "./pages/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import { AuthProvider } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
// step-1
const LazyAbout = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback={"Loading..."}>
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />}></Route>
          <Route path="new" element={<New />}></Route>
          <Route path="featured" element={<Featured />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>

        {/* <Route path="users/1" element={<UserDetails/>}></Route>
        <Route path="users/2" element={<UserDetails/>}></Route>
      <Route path="users/3" element={<UserDetails/>}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
