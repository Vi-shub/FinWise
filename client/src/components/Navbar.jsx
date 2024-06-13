import React from "react";
import logo from "../assets/logo2.png";
import bagde from "../assets/badge.png";
import daily from "../assets/daily.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#94e1ff] px-6 font-poppins py-3 z-10 shadow-md fixed">
        <div className="flex">
          <img src={logo} alt="logo" className="h-[60px] w-[60px]"/>
          <a className="btn btn-ghost text-2xl hover:bg-blue-300 font-bold">FinWise</a>
        </div>
        <div className="flex justify-center flex-grow right-10 ">
          <ul className="menu menu-horizontal px-4 gap-3 font-semibold text-lg  ">
            <li>
              <a className="hover:bg-blue-300 ">Learning</a>
            </li>
            <li>
              <a  href="http://localhost:3000" className="hover:bg-blue-300">Expense Tracker</a>
            </li>
            <li>
              <a className="hover:bg-blue-300">Leaderboard</a>
            </li>
          </ul>
        </div>
        <div className="flex-none ">
        <img src={daily} alt="daily" className="h-[40px] w-[40px] cursor-pointer"/>
          <img src={bagde} alt="badge" className="h-[50px] w-[50px] cursor-pointer"/>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
