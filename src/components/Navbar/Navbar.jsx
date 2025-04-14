import React from "react";
import { Link, NavLink } from "react-router";
import "./nav.css"

const Navbar = () => {
  return (
    <div className="flex justify-around mt-4">
      <div>
        <h1 className="font-bold text-xl">My Navbar</h1>
      </div>
      <nav className="flex gap-4">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/users'>Users</NavLink>

      </nav>
      <div>
        <button className="font-bold text-xl">SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
