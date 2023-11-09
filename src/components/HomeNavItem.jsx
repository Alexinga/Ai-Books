import { NavLink } from "react-router-dom";

function HomeNavItems() {
  return (
    <ul className="flex justify-end gap-8 flex-1 text-white">
      <NavLink to="/about">
        <li className="text-lg">About</li>
      </NavLink>
      <NavLink to="/premium">
        <li className="text-lg">Premium</li>
      </NavLink>
      <NavLink to="/login">
        <li className="text-lg">Login</li>
      </NavLink>
    </ul>
  );
}

export default HomeNavItems;
