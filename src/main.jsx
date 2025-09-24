import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddNew from "./AddNew.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className='bookList'>
            <h1 className='title'>BOOK CATALOG</h1>
            <div className='line'> </div>
            <div className='allContent'>
                <div className='books'>
                    <AddNew />
                    <div className='griding'>
                        <App
                            img='https://itbook.store/img/books/9780321812186.png'
                            price='21.99'
                            link='https://itbook.store/books/9780321812186'
                        />
                        <App
                            img='https://itbook.store/img/books/9781484243947.png'
                            price='19.02'
                            link='https://itbook.store/books/978148424394'
                        />
                        <App
                            img='https://itbook.store/img/books/9780137843749.png'
                            price='31.98'
                            link='https://itbook.store/books/9780137843749'
                        />
                        <App
                            img='https://itbook.store/img/books/9780321683915.png'
                            price='10.29'
                            link='https://itbook.store/books/9780321683915'
                        />
                        <App
                            img='https://itbook.store/img/books/9780321832740.png'
                            price='8.99'
                            link='https://itbook.store/books/9780321832740'
                        />
                        <App
                            img='https://itbook.store/img/books/9780321918963.png'
                            price='14.48'
                            link='https://itbook.store/books/9780321918963'
                        />
                        <App
                            img='https://itbook.store/img/books/9780596517748.png'
                            price='4.37'
                            link='https://itbook.store/books/9780596517748'
                        />
                        <App
                            img='https://itbook.store/img/books/9780596527747.png'
                            price='7.72'
                            link='https://itbook.store/books/9780596527747'
                        />
                        <App
                            img='https://itbook.store/img/books/9780596802790.png'
                            price='19.59'
                            link='https://itbook.store/books/9780596802790'
                        />
                        <App
                            img='https://itbook.store/img/books/9780596805784.png'
                            price='5.00'
                            link='https://itbook.store/books/9780596805784'
                        />
                    </div>
                </div>
            </div>

            <footer className='footer'>
                <p>@Wing Yan Sophia Wan, 2025 </p>
            </footer>
        </div>
    </StrictMode>
);