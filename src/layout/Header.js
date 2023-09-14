import React from "react";
import { Link } from "react-router-dom";

const Header = ({handleSearchbtnClick}) => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <h2 className="ir_so">header</h2>
                    <div className="header">
                        <h1 className="logo">
                            <Link to={"/"} className="move_to_home">
                                Movie
                            </Link>
                        </h1>
                        <nav className="nav">
                            <ul className="nav_list">
                                <li className="home">
                                    <Link to={"/"} className="nav_links">Home</Link>
                                </li>
                                <li className="about">
                                    <Link className="nav_links">About</Link>
                                </li>
                            </ul>
                            <button type="button" className="search_btn" onClick={handleSearchbtnClick}>search</button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
