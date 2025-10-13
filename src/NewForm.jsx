import { nanoid } from "nanoid";

function NewForm({ addBook, closeModal = () => {} }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newBook = {
            id: nanoid(),
            title: data.get("title"),
            author: data.get("author"),
            publisher: data.get("publisher"),
            image: data.get("image"),
            publicationYear: data.get("publication-year"),
            language: data.get("language"),
            pages: data.get("pages"),
        };

        addBook(newBook);
        e.target.reset();
        closeModal();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3 className="add-header">ADD BOOK</h3>

                <div className="form-detail">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" placeholder="Book Title" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Author"> Author </label>
                    <input type="text" name="author" placeholder="Author" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Publisher">Publisher </label>
                    <input type="text" name="publisher" placeholder="Publisher" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Image">Image URL </label>
                    <input type="text" name="image" placeholder="URL" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Publication-Year">Publication Year </label>
                    <input type="number" name="publication-year" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Language">Language </label>
                    <input type="text" name="language" placeholder="Language" />
                </div>

                <div className="form-detail">
                    <label htmlFor="Pages">Pages: </label>
                    <input type="number" name="pages" />
                </div>

                <button className="save-btn" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default NewForm;