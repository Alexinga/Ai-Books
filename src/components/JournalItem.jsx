import { Rating } from "react-simple-star-rating";
import { useBooks } from "../context/BookContext";
//eslint-disable-next-line
function JournalItem({ journalItem }) {
  const { deleteJournalItem } = useBooks();
  //eslint-disable-next-line
  const dateString = journalItem.date;
  const dateObject = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = dateObject.getMonth();
  const monthName = monthNames[monthIndex];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const IMG_PATH = "https://covers.openlibrary.org/b/id/";
  function handleRemoveJournal() {
    //eslint-disable-next-line
    deleteJournalItem(journalItem.key);
  }
  //eslint-disable-next-line
  const ratingNum = journalItem.rating;
  //eslint-disable-next-line
  const imgCover = journalItem.currentBookImg;
  //eslint-disable-next-line
  return (
    <li className="border-b-2 border-purple-500">
      <h2>{`${monthName} ${day}, ${year}`}</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-start">
          {/*eslint-disable-next-line*/}
          <img className="w-20" src={`${IMG_PATH}${imgCover}-L.jpg`}></img>
          <div>
            {/*eslint-disable-next-line*/}
            <h4>{journalItem.currentBook}</h4>
            <Rating
              fillColor="#8b5cf6"
              readonly={true}
              initialValue={ratingNum}
            ></Rating>
            {/*eslint-disable-next-line */}
            <p>{journalItem.notes}</p>
          </div>
        </div>
        <div>
          <span onClick={handleRemoveJournal} className="cursor-pointer">
            ❌
          </span>
        </div>
      </div>
    </li>
  );
}

export default JournalItem;
