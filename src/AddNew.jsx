import "./AddNew.css";
import NewForm from "./NewForm";
import Modal from "./Modal";

function AddNew({ books = [], setBooks, selectedBookId }) {
    function deleteBook() {
        if (selectedBookId) {
            const newBooks = books.filter((b) => b.id !== selectedBookId);
            setBooks(newBooks);
        }
    }

    function addBook(newBook) {
        setBooks([...books, newBook]);
    }

    return (
        <div>
            <div className="controls">
                <Modal btnLabel="New" btnclassName="new">
                    <NewForm addBook={addBook} />
                </Modal>
                <div className="action-row">
                    <button className="edit">Edit</button>
                    <button className="btndelete" onClick={deleteBook} disabled={!selectedBookId}>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNew;