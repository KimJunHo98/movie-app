import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
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
                            <form className="search_form">
                                <label htmlFor="user_search" className="ir_so">search</label>
                                <input type="text" id="user_search" name="search" value="" placeholder="어떤 영화를 찾으시나요?" className="search_input" />
                            </form>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
