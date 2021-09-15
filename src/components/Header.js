import React from "react";
import Typed from "react-typed";



const Header = () => {
    return (
        <div>
            <div className="header-wraper">
                <div className="header-info">
                    <h1>Dr. Stenzin Mejay</h1>
                    <Typed
                        className="typed-text"
                        strings={["User Interfence", "User Experience"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <a href="#" className="btn-contact">Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
