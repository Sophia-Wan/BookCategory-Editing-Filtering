import "./App.css";

function App(props) {
    const { id, image, img, price, author, title, onSelect, selectedBookId } = props;

    const isSelected = selectedBookId === id;

    function handleClick() {
        if (onSelect) onSelect(id);
    }

    const imgSrc = image || img || "";

    return (
        <div className='container' style={{ position: "relative" }}>
            <div
                className="bookdetails"
                style={{ position: "relative", background: isSelected ? "#f6e9ffff" : undefined }}
                onClick={handleClick}
            >
 
                <div className='listings'>
                    {imgSrc ? <img src={imgSrc} alt={title || "book"} /> : null}
                </div>
                <div className='details'>
                    {price !== undefined && <p>${price}</p>}
                    <p className='author'>by: {author || ""}</p>
                </div>
            </div>
        </div>
    );
}


export default App;

