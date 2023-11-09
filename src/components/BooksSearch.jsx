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
    <div className="flex items-center justify-between p-4 max-md:flex-wrap max-md:justify-center bg-violet-200">
      <h2 className="text-xl">
        Welcome! Start searching for your favorite books!
      </h2>
      <div className="flex items-center gap-4">
        <span className="bg-violet-500 text-white p-1 rounded-lg">
          Results: {resultsNum}
        </span>
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
  );
}

export default BooksSearch;
