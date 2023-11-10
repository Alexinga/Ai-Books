import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomeNavItems() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        onClick={handleMenu}
        className="hidden max-md:block max-md:cursor-pointer"
      >
        <div className="bg-white h-1 w-11 my-1"></div>
        <div className="bg-white h-1 w-11 my-1"></div>
        <div className="bg-white h-1 w-11 my-1"></div>
      </div>
      {isOpen ? (
        <ul className="flex justify-end gap-8 flex-1 text-white max-md:absolute max-md:top-14 max-md:left-0 max-md:bg-violet-500 max-md:z-30 max-md:flex max-md:w-full max-md:overflow-hidden max-md:px-4 max-md:py-2 max-md:justify-start">
          <NavLink to="/about">
            <li className="text-lg max-md:border-b-2 max-md:border-white">
              About
            </li>
          </NavLink>
          <NavLink to="/premium">
            <li className="text-lg max-md:border-b-2 max-md:border-white">
              Premium
            </li>
          </NavLink>
          <NavLink to="/login">
            <li className="text-lg max-md:border-b-2 max-md:border-white">
              Login
            </li>
          </NavLink>
        </ul>
      ) : (
        <ul className="flex justify-end gap-8 flex-1 text-white max-md:hidden">
          <NavLink to="/about">
            <li className="text-lg max-md:border-b-2">About</li>
          </NavLink>
          <NavLink to="/premium">
            <li className="text-lg max-md:border-b-2">Premium</li>
          </NavLink>
          <NavLink to="/login">
            <li className="text-lg max-md:border-b-2">Login</li>
          </NavLink>
        </ul>
      )}
    </>
  );
}

export default HomeNavItems;
