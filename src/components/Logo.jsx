import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <h1 className="sm:text-xl text-white">Sound Thoughts</h1>
    </NavLink>
  );
}

export default Logo;
