import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <>
      <div>
        {/* <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cms">CMS</Link></li>
        </ul>
      </nav> */}
        <Navbar/>
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;



