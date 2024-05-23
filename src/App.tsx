import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/views/MainPage/MainPage";
import { LoginPage } from "./components/views/LoginPage/LoginPage";
import { Navbar } from "./components/Navbar/Navbar";
import { RegisterPage } from "./components/views/RegisterPage/RegisterPage";
import { MyPage } from "./components/views/MyPage/MyPage";
import axios from "axios";
import { PrivateRoute } from "./components/Router/PrivateRoute";
import React from "react";
import { BookInfo } from "./components/Component/BookInfo/BookInfo";

const App: React.FC = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/bookinfo" Component={BookInfo} />
        <Route element={<PrivateRoute />}>
          <Route path="/mypage" Component={MyPage} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
