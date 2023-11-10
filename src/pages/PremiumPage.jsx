import HomeNav from "../components/HomeNav";

function PremiumPage() {
  return (
    <div>
      <HomeNav />
      <div className="flex items-center justify-center max-md:justify-normal flex-col h-screen bg-violet-200 max-md:h-full">
        <div>
          <h2 className="text-4xl text-center max-md:text-xl pt-8 max-md:pt-10">
            Premium Plans
          </h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi
            earum nulla laboriosam aliquid ullam.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 p-8 justify-center items-start text-center text-purple-900 max-md:grid-cols-1 bg-violet-200">
          <div className="bg-white p-4 shadow-xl rounded-lg">
            <h4 className="text-lg">Gold</h4>
            <h2 className="text-5xl">$75</h2>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              debitis.
            </p>
            <ul className="text-sm pb-4">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <button className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg">
              Explore Now
            </button>
          </div>
          <div className="bg-white p-4 shadow-xl rounded-lg">
            <h4 className="text-lg">Silver</h4>
            <h2 className="text-5xl">$45</h2>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              debitis.
            </p>
            <ul className="text-sm pb-4">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <button className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg">
              Explore Now
            </button>
          </div>
          <div className="bg-white p-4 shadow-xl rounded-lg">
            <h4 className="text-lg">Bronze</h4>
            <h2 className="text-5xl">$25</h2>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              debitis.
            </p>
            <ul className="text-sm pb-4">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <button className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumPage;
