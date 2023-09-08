import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <div className="header">
                        <h1 className="logo">
                            <Link to={"/"} className="move_to_home">
                                Movie
                            </Link>
                        </h1>
                    </div>
                </div>
        </header>
        </>
    );
};

export default Header;
