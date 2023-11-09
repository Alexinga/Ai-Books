import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

function AppNavItem() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  function handleOut() {
    logout();
    navigate("/");
  }
  return (
    <ul className="flex justify-end gap-8 flex-1 text-white">
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
  );
}

export default AppNavItem;
