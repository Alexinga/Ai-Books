import { useBooks } from "../context/BookContext";
import JournalItem from "../components/JournalItem";
import BackButton from "../components/BackButton";

function JournalPage() {
  const { journal } = useBooks();
  return (
    <>
      <BackButton />
      <ul className="p-8">
        {journal.map((journalItem, index) => (
          <JournalItem journalItem={journalItem} key={index} />
        ))}
      </ul>
    </>
  );
}

export default JournalPage;
