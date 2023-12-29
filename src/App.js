import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./css/style.css";

const App = () => {
    const searchFormRef = useRef(null);

    const handleSearchbtnClick = () => {
        searchFormRef.current.classList.toggle("active");
    };

    return (
        <BrowserRouter>
            <div id="wrap">
                <Header handleSearchbtnClick={handleSearchbtnClick} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home searchFormRef={searchFormRef} />} />
                        <Route path="/detail/:id/*" element={<Detail />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
