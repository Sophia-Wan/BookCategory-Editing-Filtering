import { nanoid } from "nanoid";

function NewForm({ addBook, closeModal, updateBook, book }) {
    const isEditing = !!book;
    const initialValues = {
        title: book?.title || "",
        author: book?.author || "",
        publisher: book?.publisher || "",
        year: book?.publicationYear || "",
        language: book?.language || "",
        pages: book?.pages || "",
        image: book?.image || "",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newBook = {
           id: isEditing ? book.id : nanoid(),
            title: data.get("title"),
            author: data.get("author"),
            publisher: data.get("publisher"),
            image: data.get("image"),
            publicationYear: data.get("publication-year"),
            language: data.get("language"),
            pages: data.get("pages"),
        };

if(isEditing){
    updateBook(newBook);
} else {
    addBook(newBook);
}
        e.target.reset();
        closeModal();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3 className="add-header">ADD BOOK</h3>

                <div className="form-detail">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" placeholder="Book Title" defaultValue={initialValues.title} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Author"> Author </label>
                    <input type="text" name="author" placeholder="Author" defaultValue={initialValues.author} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Publisher">Publisher </label>
                    <input type="text" name="publisher" placeholder="Publisher" defaultValue={initialValues.publisher} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Image">Image URL </label>
                    <input type="text" name="image" placeholder="URL" defaultValue={initialValues.image} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Publication-Year">Publication Year </label>
                    <input type="number" name="publication-year" defaultValue={initialValues.year} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Language">Language </label>
                    <input type="text" name="language" placeholder="Language" defaultValue={initialValues.language} />
                </div>

                <div className="form-detail">
                    <label htmlFor="Pages">Pages: </label>
                    <input type="number" name="pages" defaultValue={initialValues.pages} />
                </div>

                <button className="save-btn" type="submit">
                    {isEditing ? "Update" : "Save"}
        
                </button>
            </form>
        </div>
    );
}

export default NewForm;