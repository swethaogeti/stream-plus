import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/loginpage/LoginPage";
import Signup from "./pages/signupPage/SignupPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
