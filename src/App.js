import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/loginpage/LoginPage";
import Signup from "./pages/signupPage/SignupPage";
import History from "./pages/historyPage/History";
import Playlist from "./pages/playlistPage/Playlist";
import Watchlater from "./pages/watchlaterPage/Watchlater";
import Likes from "./pages/likesPage/Likes";
import SingleVideo from "./pages/singleVideoPage/SingleVideo";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import PlaylistVideos from "./pages/playlistVideos/PlaylistVideos";
import ProtectedRoute from "./components/protectRoute/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/explore" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <Playlist />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/watchlater"
          element={
            <ProtectedRoute>
              <Watchlater />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <ProtectedRoute>
              <Likes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/video/:videoId"
          element={
            <ProtectedRoute>
              <SingleVideo />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/playlist/:playlistId"
          element={
            <ProtectedRoute>
              <PlaylistVideos />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
