//no need of navbar when use router
import Navbar from './Components/Navbar';
import About from './Pages/about';
import Home from './Pages/home';
import Items from './Pages/items';
import ItemDetails from './Pages/itemdetails';
import ErrorPage from './Pages/errorPage';
// import { useState } from 'react'; // no use
import {
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom';

// import {createRoutesFromElements, Route} from 'react-router-dom'; way-2
const App = () => {

  // way-1
  const router = createBrowserRouter([
    {
    path: '/',
    element: <Navbar/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/about", element: <About/>},
      {
      path: "/items",
      children: [
        {
          index: true,
          element: <Items/>
        },
        {
          path: ':id',
          element: <ItemDetails/>
        }
      ]}
    ]
  }   
  ])

  // way-2
  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home/>}/>
  //   <Route path="/about" element={<About/>}/>
  //   <Route path="/items" element={<Items/>}/>
  //   </>
  // )
  // const router = createBrowserRouter(routes);


  // const [page, setPage] = useState("Home"); // no use
  return (
    <>
   {/* <Navbar setPage={setPage}/>
   {page === "home" && <Home/>}
   {page === "about" && <About/>}
   {page === "items" && <Items/>} */}
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
