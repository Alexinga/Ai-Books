import { useBooks } from "../context/BookContext";
import Loading from "./Loading";
function BookItemContent() {
  const { currentBook, isLoading } = useBooks();
  if (isLoading) return <Loading />;
  return (
    <>
      <h2>
        <span className="text-purple-900 text-lg font-semibold">Title:</span>{" "}
        {currentBook?.title}
      </h2>
      {currentBook.description ? (
        currentBook.description.value ? (
          <p>
            {" "}
            <span className="text-purple-900 text-lg font-semibold">
              Description:
            </span>{" "}
            {currentBook.description.value}
          </p>
        ) : (
          <p>
            {" "}
            <span className="text-purple-900 text-lg font-semibold">
              Description:
            </span>{" "}
            {currentBook.description}
          </p>
        )
      ) : (
        <p>
          <span className="text-purple-900 text-lg font-semibold">
            Description:
          </span>{" "}
          There is no description for {currentBook.title}
        </p>
      )}
      {currentBook.subjects ? (
        <p>
          <span className="text-purple-900 text-lg font-semibold">
            Subject:
          </span>{" "}
          {currentBook.subjects?.map((sub) => sub)?.join(" ")}
        </p>
      ) : (
        <p>
          <span className="text-purple-900 text-lg font-semibold">
            Subject:
          </span>{" "}
          There is no subjects for {currentBook.title}
        </p>
      )}
    </>
  );
}

export default BookItemContent;
