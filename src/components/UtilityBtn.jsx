import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

//eslint-disable-next-line
function UtilityBtn({ showModal }) {
  const {
    addToCollection,
    collection,
    id,
    journal,
    deleteJournalItem,
    deleteCollectionItem,
  } = useBooks();
  const collectionDuplicate = collection.map((item) => item.key).includes(id);
  const journalDuplicate = journal.map((item) => item.key).includes(id);
  const collectionKey = collection.map((item) => item.key).at(0);
  const journalKey = journal.map((item) => item.key).at(0);
  console.log(collectionKey);
  const navigate = useNavigate();
  function handleCollection() {
    addToCollection();
    navigate("/app/collection");
  }
  function handleRemoveCollection() {
    deleteCollectionItem(collectionKey);
  }
  function handleRemoveJournal() {
    deleteJournalItem(journalKey);
  }
  return (
    <div className="flex items-center gap-8">
      {!collectionDuplicate ? (
        <button
          onClick={handleCollection}
          className="bg-violet-500 text-white p-1 rounded-lg"
        >
          Add to Collection
        </button>
      ) : (
        <button
          onClick={handleRemoveCollection}
          className="bg-violet-500 text-white p-1 rounded-lg"
        >
          Remove from Collection
        </button>
      )}
      {!journalDuplicate ? (
        <button
          onClick={showModal}
          className="bg-violet-500 text-white p-1 rounded-lg"
        >
          {" "}
          Add to Journal
        </button>
      ) : (
        <button
          onClick={handleRemoveJournal}
          className="bg-violet-500 text-white p-1 rounded-lg"
        >
          {" "}
          Remove from Journal
        </button>
      )}
    </div>
  );
}

export default UtilityBtn;
