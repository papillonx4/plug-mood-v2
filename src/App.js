import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Main from './components/Main';
import FormsPage from './page/FormsPage';
import SuccessPage from './page/FormsPage/SuccessPage'
import ListPage from './page/NoVerify/ListPage'
import MainPage from './page/NoVerify/MainPage'
import HistoryPage from './page/NoVerify/HistoryPage/History'
import IncomePage from './page/NoVerify/HistoryPage/Income'
import CheckPage from './page/Verify/MainPage/Check'
import NotPassPage from './page/Verify/MainPage/NotPass'
import PassPage from './page/Verify/MainPage/Pass'
import Sidebar from './components/Sidebar';


function App() {
  return (
    <BrowserRouter>
    {/* <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage />} />
    </Routes> */}
    <Main/>


    </BrowserRouter>
  );
}
export default App;