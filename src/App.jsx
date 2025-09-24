import { useState } from "react";
import "./App.css";

function App(details) {
    return (
        <div className='container'>
            <div className='bookdetails'>
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