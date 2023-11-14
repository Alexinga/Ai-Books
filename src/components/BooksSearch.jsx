import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
function BooksSearch() {
  const { getAPI, books } = useBooks();
  const resultsNum = books.length;
  function handleCall(e) {
    const newSearchTitle = e.target.value;
    if (newSearchTitle === "") return;
    if (newSearchTitle.length > 3) {
      getAPI(newSearchTitle);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 max-md:flex-wrap max-md:justify-center max-md:pt-10 bg-violet-200">
      <h2 className="text-xl font-semibold max-md:text-center max-md:text-lg">
        Welcome! Start searching for your favorite books!
      </h2>
      <div className="flex items-center gap-4 max-sm:flex-wrap">
        <span className="bg-violet-500 text-white p-1 rounded-lg text-sm max-sm:w-1/2 max-sm:text-center max-sm:m-auto">
          Results: {resultsNum}
        </span>
        <div className="max-sm:m-auto">
          <input
            onChange={handleCall}
            className="border-4 p-1 rounded-lg"
            type="search"
            placeholder="search..."
          ></input>
          <Link to={"book-list"}>
            <button className="bg-violet-500 text-white p-1 rounded-lg">
              Go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BooksSearch;
