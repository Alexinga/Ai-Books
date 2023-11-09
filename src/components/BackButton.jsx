import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function prev() {
    navigate("/app/book-list");
  }
  return (
    <button
      onClick={prev}
      className="bg-violet-500 text-white px-2 py-1 border-2 rounded-lg ml-4 mt-4"
    >
      &#8592;
    </button>
  );
}

export default BackButton;
