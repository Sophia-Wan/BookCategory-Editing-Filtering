import { useState } from "react";
import "./App.css";

function App(details) {
    function remove(exit) {
        if (exit.target === exit.currentTarget) {
            return;
        }
        if (exit.target.tagName !== "SPAN") {
            return;
        }
        exit.currentTarget.remove();
    }

    return (
        <div className='container' style={{ position: "relative" }}>
            <div className='bookdetails' style={{ position: "relative" }} onClick={remove}>
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