import { useBooks } from "../context/BookContext";
import placeholder from "/images/placeholder-img.webp";
function BookItemImg() {
  const { currentBook } = useBooks();
  const IMG_PATH = "https://covers.openlibrary.org/b/id/";
  return (
    <>
      {" "}
      {currentBook.covers ? (
        <div>
          <img
            className="w-full max-md:w-full"
            //eslint-disable-next-line
            src={`${IMG_PATH}${currentBook.covers.at(0)}-L.jpg`}
            //eslint-disable-next-line
            alt={`title-${currentBook.covers}`}
          ></img>
        </div>
      ) : (
        <img
          className="w-1/2 max-md:w-full hidden"
          src={`${placeholder}`}
          alt={`placeholder`}
        ></img>
      )}
    </>
  );
}

export default BookItemImg;
