import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/views/MainPage/MainPage";
import { LoginPage } from "./components/views/LoginPage/LoginPage";
import { Navbar } from "./components/Navbar/Navbar";
import { RegisterPage } from "./components/views/RegisterPage/RegisterPage";
import { MyPage } from "./components/views/MyPage/MyPage";
import Axios from "axios";

const App: React.FC = () => {
  Axios.defaults.baseURL = process.env.REACT_BASE_API_URL + "/api";
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/mypage" Component={MyPage} />
      </Routes>
    </div>
  );
};

export default App;
