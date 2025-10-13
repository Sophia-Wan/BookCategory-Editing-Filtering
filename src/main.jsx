import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddNew from "./AddNew.jsx";

function AddNewWrapper() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    return (
        <>
            <AddNew
                books={books}
                setBooks={setBooks}
                selectedBookId={selectedBookId}
                setSelectedBookId={setSelectedBookId}
            />
            <div className='griding'>
                {books.map((b) => (
                    <App
                        key={b.id}
                        {...b}
                        onSelect={() => setSelectedBookId(b.id)}
                        selectedBookId={selectedBookId}
                    />
                ))}
            </div>
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className='bookList'>
            <h1 className='title'>BOOK CATALOG</h1>
            <div className='line'> </div>
            <div className='allContent'>
                <div className='books'>
                        {/* manage book state here and pass down to AddNew */}
                        <AddNewWrapper />
                    </div>
            </div>

            <footer className='footer'>
                <p>@Wing Yan Sophia Wan, 2025 </p>
            </footer>
        </div>
    </StrictMode>
);