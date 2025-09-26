import { useState } from "react";
import "./App.css";

function App(details) {
    const [isColour, setIsColour] = useState(false);

    function handleBookdetailsClick(e) {
        if (e.target.tagName === "SPAN") {
            e.currentTarget.remove();
            return;
        }
        setIsColour((prev) => !prev);
    }

    return (
        <div className='container' style={{ position: "relative" }}>
            <div
                className="bookdetails"
                style={{ position: "relative", background: isColour ? "#f6e9ffff" : undefined }}
                onClick={handleBookdetailsClick}
            >
                <div className="close">
                    <span>Remove</span>
                </div>
                <div className='listings'>
                    <img src={details.img} />
                </div>
                <div className='details'>
                    <p>${details.price}</p>
                </div>
                <div className='link'>
                    <a
                        href={details.link}
                        target='_blank'>
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}


export default App;