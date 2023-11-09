import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
function HomePage() {
  return (
    <div>
      <HomeNav />
      <div className="relative bg-hero-img bg-center bg-no-repeat h-screen bg-cover">
        <div className="absolute bg-black inset-0 z-10 opacity-50"></div>
        <div className="flex items-center justify-center h-full flex-col relative z-20 gap-4">
          <h2 className="text-white text-4xl ">Welcome to Sound Thoughts</h2>
          <p className="text-white text-center text-xl">
            Explore our collections of books and expand on what you love about
            them!{" "}
          </p>
          <Link to="/login">
            <button className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
