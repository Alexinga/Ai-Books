import { Link } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import placeholder from "/images/placeholder-img.webp";
//eslint-disable-next-line
function CollectionItem({ singleBookCollection }) {
  const IMG_PATH = "https://covers.openlibrary.org/b/id/";
  const { getSelectedAPI, deleteCollectionItem } = useBooks();
  //   const test = singleBookCollection;
  //   console.log(test);
  function handleCurrentAPI() {
    //eslint-disable-next-line
    getSelectedAPI(singleBookCollection.key);
  }
  function handleRemoveBook() {
    //eslint-disable-next-line
    deleteCollectionItem(singleBookCollection.key);
  }
  //eslint-disable-next-line
  return (
    <li className="shadow-lg rounded-2xl">
      {/* eslint-disable-next-line */}
      {singleBookCollection.covers ? (
        <img
          className="w-screen object-cover max-md:h-full"
          //eslint-disable-next-line
          src={`${IMG_PATH}${singleBookCollection.covers.at(0)}-L.jpg`}
          //eslint-disable-next-line
          alt={`title-${singleBookCollection.covers.at(0)}`}
        ></img>
      ) : (
        <img
          className="w-screen h-screen object-cover max-md:h-full"
          src={`${placeholder}`}
          alt={`placeholder`}
        ></img>
      )}
      {/*eslint-disable-next-line*/}
      <p className="text-center my-4 text-md">{singleBookCollection.title}</p>
      <div className="flex justify-center gap-4">
        <Link to={"/app/id"}>
          <button
            onClick={handleCurrentAPI}
            className="block m-auto mb-4 bg-violet-500 text-white px-2 py-1 border-2 rounded-lg"
          >
            See More
          </button>
        </Link>
        <button
          onClick={handleRemoveBook}
          className="mb-4 bg-violet-500 text-white px-2 py-1 border-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CollectionItem;
