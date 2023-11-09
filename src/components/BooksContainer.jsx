import { useBooks } from "../context/BookContext";
import BookList from "./BookList";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

function BooksContainer() {
  const { isLoading, books, errorMsg } = useBooks();
  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMessage />;
  return (
    <div className="flex justify-center items-center p-8">
      <ul className="grid grid-cols-5 gap-8 justify-center items-center max-md:grid-cols-3 max-sm:grid-cols-1">
        {books?.map((book) => (
          <BookList book={book} key={book.key}></BookList>
        ))}
      </ul>
    </div>
  );
}

export default BooksContainer;
