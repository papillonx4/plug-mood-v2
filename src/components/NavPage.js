import React from "react";
import { Routes, Route } from "react-router-dom";
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import MainPage from "../page/NoVerify/MainPage";
import HistoryPage from "../page/NoVerify/HistoryPage/History";
import ListPage from "../page/NoVerify/ListPage"
import IncomePage from "../page/NoVerify/HistoryPage/Income"
import ReviewPage from "../page/NoVerify/HistoryPage/Review"
import CheckPage from "../page/Verify/MainPage/Check"
import NotPassPage from "../page/Verify/MainPage/NotPass"
import PassPage from "../page/Verify/MainPage/Pass"


const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/income" element={<IncomePage />} />
                    <Route path="/review" element={<ReviewPage />} />
                    <Route path="/check" element={<CheckPage />} />
                    <Route path="/notpass" element={<NotPassPage />} />
                    <Route path="/pass" element={<PassPage />} />
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar