import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillMicFill } from "react-icons/bs"
import Headlessui from "./Headlessui";

const Header = () => {
  return (
    <div className="w-full flex shadow-2xl shadow-black rounded-b-3xl bg-slate-300 relative">
      <nav className="w-full flex justify-between items-center px-8 py-4">
        <div className="bg-[#10256D] rounded-full p-3">
          <a href="https://www.linkedin.com/in/nagesh-b-c-739bb622a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi1AdObNJQ%2F%2BAX6feUnediA%3D%3D">
            <BsFillMicFill className="text-5xl text-gray-200"/>
          </a>
        </div>
        <ul className="w-full md:flex flex-row justify-end gap-5 text-md lg:text-xl 2xl:text-2xl font-bold hidden">
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/Login">
              Login
            </NavLink>
          </li>
          
        </ul>
        <div className="mx-10 text-2xl"><Headlessui/></div>
      </nav>
    </div>
  );
};
export default Header;