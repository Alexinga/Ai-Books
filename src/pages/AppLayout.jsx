import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
// import BooksContainer from "../components/BooksContainer";
// import BookSearch from "../components/BooksSearch";

function AppLayout() {
  return (
    <div>
      <AppNav />
      <Outlet />
      {/* <BookSearch />
      <BooksContainer /> */}
    </div>
  );
}

export default AppLayout;
