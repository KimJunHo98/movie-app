import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./css/reset.css";

const App = () => {
    return (
        <div id="wrap">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
