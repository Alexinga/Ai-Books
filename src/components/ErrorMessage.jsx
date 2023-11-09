import { useBooks } from "../context/BookContext";

function ErrorMessage() {
  const { errorMsg } = useBooks();
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">{errorMsg}</p>
    </div>
  );
}

export default ErrorMessage;
