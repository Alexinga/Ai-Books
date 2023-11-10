import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
const BASE_API = "https://openlibrary.org/search.json?title=";
// const CURRENTBOOK_API = "https://openlibrary.org/works/OL45804W.json";
const BookContext = createContext();
const initialState = {
  books: [],
  currentBook: {},
  isLoading: false,
  errorMsg: "",
  id: null,
  collection: JSON.parse(localStorage.getItem("collection")) || [],
  journal: JSON.parse(localStorage.getItem("journal")) || [],
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "books/loaded":
      return {
        ...state,
        isLoading: false,
        books: action.payload
          .slice(0, 30)
          .filter((item) => item.cover_i !== undefined),
        errorMsg: "",
      };
    case "selectedBook/loaded":
      return {
        ...state,
        isLoading: false,
        currentBook: action.payload,
        id: action.payload.key,
      };
    case "collection/loaded":
      return {
        ...state,
        isLoading: false,
        collection: [...state.collection, state.currentBook],
      };
    case "collection/storage/loaded":
      return { ...state, isLoading: false, collection: action.payload };
    case "collection/deleted":
      return {
        ...state,
        isLoading: false,
        collection: state.collection.filter(
          (item) => item.key !== action.payload
        ),
        // currentBook: {},
      };
    case "journal/loaded":
      return {
        ...state,
        isLoading: false,
        journal: [...state.journal, action.payload],
      };
    case "journal/deleted":
      return {
        ...state,
        isLoading: false,
        journal: state.journal.filter((item) => item.key !== action.payload),
      };
    case "reject":
      return { ...state, isLoading: false, errorMsg: action.payload };
    default:
      throw new Error("Unknown error in reducer");
    // console.error(`unknown action type: ${action.type}`);
    // return state;
  }
}
//eslint-disable-next-line
function BookProvider({ children }) {
  const [
    { books, isLoading, errorMsg, id, currentBook, collection, journal },
    dispatch,
  ] = useReducer(reducer, initialState);
  //This will help with race condition where the api will stop making calls towards the end
  const controller = new AbortController();
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);
  useEffect(() => {
    localStorage.setItem("journal", JSON.stringify(journal));
  }, [journal]);
  async function getAPI(searchTitle) {
    const abortAPI = () => {
      controller.abort();
    };
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_API}${searchTitle}`, {
        signal: controller.signal,
      });
      // console.log(res);
      if (!res.ok) throw new Error("Something went wrong with fetching books");
      const data = await res.json();
      // console.log(data.numFound);
      if (data.numFound === 0) throw new Error("Book not found!");
      // if (data.numFound === 0) console.log("book not found");
      dispatch({ type: "books/loaded", payload: data.docs });
    } catch (err) {
      if (err.name !== "AbortError") {
        dispatch({ type: "reject", payload: err.message });
      }
      // if (err.name === "AbortError") {
      //   console.warn("Request was aborted: ", err);
      // } else {
      //   dispatch({ type: "reject", payload: err.message });
      // }
      // dispatch({ type: "reject", payload: err.message });
    }
    return abortAPI;
  }
  async function getSelectedAPI(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`https://openlibrary.org${id}.json`);
      const data = await res.json();
      // console.log(data);
      dispatch({ type: "selectedBook/loaded", payload: data });
    } catch (err) {
      dispatch({ type: "reject", payload: err.message });
    }
  }
  function addToCollection() {
    dispatch({ type: "collection/loaded" });
  }
  function deleteCollectionItem(id) {
    dispatch({ type: "collection/deleted", payload: id });
  }
  function addToJournal(journalObject) {
    dispatch({ type: "journal/loaded", payload: journalObject });
  }
  function deleteJournalItem(id) {
    dispatch({ type: "journal/deleted", payload: id });
  }
  return (
    <BookContext.Provider
      value={{
        books,
        isLoading,
        errorMsg,
        currentBook,
        collection,
        id,
        journal,
        deleteCollectionItem,
        getAPI,
        getSelectedAPI,
        addToCollection,
        addToJournal,
        deleteJournalItem,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
function useBooks() {
  const contextValue = useContext(BookContext);
  if (contextValue === undefined)
    throw new Error("Books was used outside of the Book Provider");
  return contextValue;
}
export { BookProvider, useBooks };
