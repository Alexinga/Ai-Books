import Logo from "./Logo";
import HomeNavItems from "./HomeNavItem";

function HomeNav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-purple-900">
      <Logo />
      <HomeNavItems />
    </nav>
  );
}

export default HomeNav;
