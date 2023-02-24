import React from "react";
import { Routes, Route } from "react-router-dom";
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import ListPage from "../page/NoVerify/ListPage";
import MainPage from "../page/NoVerify/MainPage";
import HistoryPage from "../page/NoVerify/HistoryPage";

const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/list" element={<ListPage />} />
                    {/* <Route path="/history" element={<History />} /> */}
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar