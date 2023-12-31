import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
function AboutPage() {
  return (
    <div className="bg-violet-200 max-sm:h-full">
      <HomeNav />
      <div className="flex items-center justify-evenly h-screen gap-4 p-8 max-md:flex-wrap max-md:h-full max-md:pt-10">
        <div className="w-3/4 max-md:w-full">
          <h2 className="text-4xl max-xl:text-2xl max-lg:text-xl max-md:text-lg">
            How We Started Sound Thoughts
          </h2>
          <p className="text-sm py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eaque autem quod cupiditate error, aliquam iure
            pariatur iusto nostrum? Similique. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus, quae magni! Debitis,
            itaque? Laborum itaque fuga aliquid, non facere, nesciunt iste vel
            suscipit voluptates, perspiciatis commodi labore laudantium.
            Repellat qui non animi vero voluptatibus.
          </p>
          <Link to="/login">
            <button className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg">
              Explore Now
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-full max-md:w-full"
            src="/images/about.jpg"
            alt="about-img"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
