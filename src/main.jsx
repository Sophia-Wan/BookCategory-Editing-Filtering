import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddNew from "./AddNew.jsx";


function Filter({ books, onFilterChange }) {
    const handleChange = (e) => {
        const value = e.target.value;
        onFilterChange(value === 'All' ? null : value);
    };

    // Get unique authors from books
    const authors = ['All', ...new Set(books.map(book => book.author).filter(Boolean))];

    return (
        <div className="filter" >
            <span >filter by author:</span>
            <select
                onChange={handleChange}
               
            >
                {authors.map(author => (
                    <option key={author} value={author}>
                        {author}
                    </option>
                ))}
            </select>
        </div>
    );
}

function AddNewWrapper() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const filteredBooks = selectedAuthor
        ? books.filter(book => book.author === selectedAuthor)
        : books;

    return (
        <>

            <div >
                <div>
                    <Filter books={books} onFilterChange={setSelectedAuthor} />
                </div>
                <h1 className='title'>BOOK CATALOG</h1>
                <div className='line'> </div>
            </div>

            <div className='allContent'>
                <div className='books'>
                    <AddNew
                        books={books}
                        setBooks={setBooks}
                        selectedBookId={selectedBookId}
                        setSelectedBookId={setSelectedBookId}
                    />

                    <div className='griding'>
                        {filteredBooks.map((b) => (
                            <App
                                key={b.id}
                                {...b}
                                onSelect={() => setSelectedBookId(b.id)}
                                selectedBookId={selectedBookId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className='bookList'>
            <AddNewWrapper />

            <footer className='footer'>
                <p>@Wing Yan Sophia Wan, 2025 </p>
            </footer>
        </div>
    </StrictMode>
);