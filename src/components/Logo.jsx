import { NavLink } from "react-router-dom";

function Logo() {
  return (
    // <img
    //   className={styles.img}
    //   src="/images/ai-books-logo.png"
    //   alt="ai-books"
    // ></img>
    <NavLink to="/">
      <h1 className="sm:text-xl text-white">Sound Thoughts Blog</h1>
    </NavLink>
  );
}

export default Logo;
