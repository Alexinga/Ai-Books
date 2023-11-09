import AppNavItem from "./AppNavItem";
// import BooksContainer from "./BooksContainer";
import BooksSearch from "./BooksSearch";
import Logo from "./Logo";
function AppNav() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-purple-900">
        <Logo />
        <AppNavItem />
      </nav>
      <BooksSearch />
      {/* <BooksContainer /> */}
    </>
  );
}

export default AppNav;
