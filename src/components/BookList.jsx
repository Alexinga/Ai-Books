import { Link } from "react-router-dom";
import placeholder from "/images/placeholder-img.webp";
import { useBooks } from "../context/BookContext";
//eslint-disable-next-line
function BookList({ book }) {
  const IMG_PATH = "https://covers.openlibrary.org/b/id/";
  const { getSelectedAPI } = useBooks();
  function handleCurrentAPI() {
    //eslint-disable-next-line
    getSelectedAPI(book.key);
  }
  return (
    //start brackets to help get rid of undefined images
    <li className="shadow-lg rounded-2xl">
      {/* eslint-disable-next-line */}
      {book.cover_i ? (
        <img
          className="w-full object-contain max-md:w-full"
          //eslint-disable-next-line
          src={`${IMG_PATH}${book.cover_i}-L.jpg`}
          //eslint-disable-next-line
          alt={`title-${book.cover_i}`}
        ></img>
      ) : (
        // <img
        //   className="w-screen h-screen object-cover max-md:h-full"
        //   //eslint-disable-next-line
        //   src={`${IMG_PATH}${book.cover_i}-L.jpg`}
        //   //eslint-disable-next-line
        //   alt={`title-${book.cover_i}`}
        // ></img>
        <img
          className="w-screen h-screen object-cover max-md:h-full"
          src={`${placeholder}`}
          alt={`placeholder`}
        ></img>
      )}
      {/*eslint-disable-next-line*/}
      <p className="text-center my-4 text-md">{book.title}</p>
      <Link to={"/app/id"}>
        <button
          onClick={handleCurrentAPI}
          className="block m-auto mb-4 bg-violet-500 text-white px-2 py-1 border-2 rounded-lg"
        >
          See More
        </button>
      </Link>
    </li>
  );
}

export default BookList;
