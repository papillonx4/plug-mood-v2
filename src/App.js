import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import MainPage from './page/NoVerify/MainPage';
import FormsPage from './page/FormsPage';
import SuccessPage from './page/FormsPage/SuccessPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;