import { useState } from "react";
import { useBooks } from "../context/BookContext";
import placeholder from "/images/placeholder-img.webp";
import { Rating } from "react-simple-star-rating";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line
function BookItemModal({ showJournalTest, closeModal }) {
  const IMG_PATH = "https://covers.openlibrary.org/b/id/";
  const { currentBook, addToJournal } = useBooks();
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const handleRating = (rate = 5) => {
    setRating(rate);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!rating || !notes || !date) return;
    const journalNotes = {
      currentBook: currentBook.title,
      currentBookImg: currentBook.covers.at(0),
      key: currentBook.key,
      rating,
      date,
      notes,
    };
    console.log(journalNotes.key);
    await addToJournal(journalNotes);
    navigate("/app/journal");
  }
  return (
    <>
      {showJournalTest && (
        <div className="fixed top-0 left-0 bg-black z-10 opacity-1 w-full h-full flex justify-center items-center flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span onClick={closeModal} className="mb-20 cursor-pointer">
              ❌
            </span>
            {currentBook.covers ? (
              <div>
                <img
                  className="w-16"
                  //eslint-disable-next-line
                  src={`${IMG_PATH}${currentBook.covers.at(0)}-L.jpg`}
                  //eslint-disable-next-line
                  alt={`title-${currentBook.covers}`}
                ></img>
              </div>
            ) : (
              <img
                className="w-1/2 max-md:w-full"
                src={`${placeholder}`}
                alt={`placeholder`}
              ></img>
            )}
            <div>
              <h2 className="text-white">{currentBook.title}</h2>
              <Rating
                fillColor="#8b5cf6"
                ratingValue={rating}
                onClick={handleRating}
              ></Rating>
              <div className="my-2">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                ></DatePicker>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <textarea
              className="border-4 border-violet-500"
              name="message"
              id="message"
              cols="40"
              rows="5"
              placeholder="Add Note..."
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            ></textarea>
            <button className="bg-violet-500 text-white p-1 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default BookItemModal;
