import { useBooks } from "../context/BookContext";
import JournalItem from "../components/JournalItem";
import BackButton from "../components/BackButton";

function JournalPage() {
  const { journal } = useBooks();
  const sortedJournal = [...journal].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <>
      <BackButton />
      <ul className="p-8">
        {sortedJournal.map((journalItem, index) => (
          <JournalItem journalItem={journalItem} key={index} />
        ))}
      </ul>
    </>
  );
}

export default JournalPage;
