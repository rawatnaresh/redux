import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="contents">
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={`/products`}><h2>Products</h2></Link>
          </li>
          <li>
            <Link to={`/carts`}><h2>Carts</h2></Link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="detail">
        <Outlet />
    </div>
    </div>
  </>
  )
}

export default Sidebar