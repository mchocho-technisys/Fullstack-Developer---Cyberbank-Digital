import { useEffect } from "react";
import useBooksContext from "./hooks/useBooksContext";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const { stableFetchBooks } = useBooksContext();

  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
