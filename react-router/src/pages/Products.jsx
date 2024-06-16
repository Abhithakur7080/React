import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <div>
            <input type="search" placeholder='Search Products...' />
        </div>
        <nav>
            <Link to={"featured"}>Featured</Link>
            <Link to={"new"}>New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products