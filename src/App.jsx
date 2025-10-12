import { useState } from "react";
import "./App.css";

function App(details) {
    const [isColour, setIsColour] = useState(false);

    function handleBookdetailsClick(e) {
        // toggle highlight colour when the card is clicked
        setIsColour((prev) => !prev);
    }

    return (
        <div className='container' style={{ position: "relative" }}>
            <div
                className="bookdetails"
                style={{ position: "relative", background: isColour ? "#f6e9ffff" : undefined }}
                onClick={handleBookdetailsClick}
            >
                {/* removed the Remove button per request */}
                <div className='listings'>
                    <img src={details.img} />
                </div>
                <div className='details'>
                    <p>by:{details.price}</p>
                </div>
              
            </div>
        </div>
    );
}


export default App;

