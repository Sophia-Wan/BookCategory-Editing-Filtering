import { useRef } from "react";
function NewForms(){
    return (
        <div className="form-container">
            <form>
                <h3>ADD BOOK</h3>
                <div className="form-detail">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" placeholder="Book Title"/>
                </div>
                <div className="form-detail">
                    <label htmlFor="Author"> Author </label>
                    <input type="text" name="author" placeholder="Author"/>
                </div>
                <div className="form-detail">
                    <label htmlFor="Publisher">Publisher </label>
                    <input type="text" name="publisher" placeholder="Publisher"/>
                </div>
                <div className="form-detail">
                    <label htmlFor="Publication-Year">Publication Year </label>
                    <input type="number" name="publication-year" />
                </div>
                <div className="form-detail">
                    <label htmlFor="Language">Language </label>
                    <input type="text" name="language" />
                </div>
                <div className="form-detail">
                    <label htmlFor="Pages">Pages: </label>
                    <input type="number" name="pages" />
                </div>
                <button>Save</button>
            </form>

        </div>
    );
}

export default NewForms;