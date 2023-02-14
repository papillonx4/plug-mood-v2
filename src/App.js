import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

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
