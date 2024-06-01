import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Navbar } from "./components/common/Navbar/Navbar";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { MyPage } from "./pages/MyPage/MyPage";
import axios from "axios";
import { PrivateRoute } from "./components/common/Router/PrivateRoute";
import React from "react";
import { BookListPage } from "./pages/BookListPage/BookListPage";
import { BookInfoPage } from "./pages/BookInfoPage/BookInfoPage";
import { WriteReviewPage } from "./pages/WriteReviewPage/WriteBookReading";
import { ViewReviewPage } from "./pages/ViewReviewPage/ViewReviewPage";
import { ReviewMainPage } from "./pages/ReviewMainPage/ReviewMainPage";

const App: React.FC = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/copynote" Component={CopyNoteMainPage} />
        <Route path="/review" Component={ReviewMainPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/booklist/:id" Component={BookListPage} />
        <Route path="/bookinfo/:id" Component={BookInfoPage} />
        <Route path="/review/view/:id" Component={ViewReviewPage} />
        <Route element={<PrivateRoute />}>
          <Route path="/mypage" Component={MyPage} />
          <Route path="/review/write/:id" Component={WriteReviewPage} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
