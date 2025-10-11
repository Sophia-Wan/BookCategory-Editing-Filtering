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
           
        </div>
    );
}


export default App;