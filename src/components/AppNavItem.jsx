import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function AppNavItem() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen(!isOpen);
  }
  function handleOut() {
    logout();
    navigate("/");
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
        <ul className="flex justify-end gap-8 flex-1 text-white max-md:absolute max-md:top-14 max-md:left-0 max-md:bg-violet-500 max-md:z-30 max-md:flex max-md:w-full max-md:overflow-hidden max-md:px-4 max-md:py-2 max-md:justify-start max-sm:gap-4">
          <NavLink to={"collection"}>
            <li className="text-lg max-md:border-b-2 max-md:border-white max-sm:text-sm">
              Collections
            </li>
          </NavLink>
          <NavLink to={"journal"}>
            <li className="text-lg max-md:border-b-2 max-md:border-white max-sm:text-sm">
              Journal
            </li>
          </NavLink>
          <li className="text-lg max-md:border-b-2 max-md:border-white max-sm:text-sm">
            <button onClick={handleOut}>
              <FaUser className="inline pr-2" />
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-8 flex-1 text-white max-md:hidden">
          <NavLink to={"collection"}>
            <li className="text-lg">Collections</li>
          </NavLink>
          <NavLink to={"journal"}>
            <li className="text-lg">Journal</li>
          </NavLink>
          <li className="text-lg">
            <button onClick={handleOut}>
              <FaUser className="inline pr-2" />
              Logout
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default AppNavItem;
