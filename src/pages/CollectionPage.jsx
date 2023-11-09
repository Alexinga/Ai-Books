import CollectionItem from "../components/CollectionItem";
import { useBooks } from "../context/BookContext";
import BackButton from "../components/BackButton";
function CollectionPage() {
  const { collection } = useBooks();
  return (
    <>
      <BackButton />
      <div className="flex justify-center items-center p-8">
        <ul className="grid grid-cols-3 gap-8 justify-center items-center max-md:grid-cols-1">
          {collection.map((singleBookCollection, index) => (
            <CollectionItem
              key={index}
              singleBookCollection={singleBookCollection}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default CollectionPage;
