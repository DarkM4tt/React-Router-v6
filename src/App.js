import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { About } from "./pages/About";
import { Book } from "./pages/Book";
import { Contact } from "./pages/Contact";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
          <li>
            <Link to="/notfound">Not Found</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {/* It can also be done using Nested Routes. */}
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/*Runs if nothing matched */}
      </Routes>
    </>
  );
}

export default App;
