import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./css/reset.css";

const App = () => {
    const searchFormRef = useRef(null);

    const handleSearchbtnClick = () => {
        searchFormRef.current.classList.toggle("active");
    }

    return (
        <div id="wrap">
            <BrowserRouter>
                <Header handleSearchbtnClick={handleSearchbtnClick}/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home searchFormRef={searchFormRef}/>} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
