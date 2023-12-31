import { useState } from "react";
import UtilityBtn from "./UtilityBtn";
import BookItemImg from "./BookItemImg";
import BookItemContent from "./BookItemContent";
import BookItemModal from "./BookItemModal";
import BackButton from "./BackButton";
import { useBooks } from "../context/BookContext";
import Loading from "./Loading";

function BookItem() {
  const { isLoading } = useBooks();
  const [showJournalTest, setShowJournalTest] = useState(false);
  function showModal() {
    setShowJournalTest(true);
  }
  function closeModal() {
    setShowJournalTest(false);
  }
  if (isLoading) return <Loading />;
  return (
    <>
      <BackButton />
      <BookItemModal
        closeModal={closeModal}
        showJournalTest={showJournalTest}
      />
      <div className="flex justify-center gap-8 h-screen p-8 max-md:flex-wrap max-md:justify-start">
        <BookItemImg />
        <div className="w-2/3 max-md:overflow-hidden max-md:w-screen max-md:pb-8">
          <UtilityBtn showModal={showModal}></UtilityBtn>
          <BookItemContent />
        </div>
      </div>
    </>
  );
}

export default BookItem;
