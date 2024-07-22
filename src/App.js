import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import SearchList from "./pages/SearchList";

import Profile from "./pages/Profile";
import Follower from "./pages/Follower";
import Following from "./pages/Following";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import CreatePost from "./pages/CreatePost";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="  bg-slate-50 relative  w-full h-full  ">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/profile/getProfile/:profileId" element={<Profile />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/profile/search/:searchName" element={<SearchList />} />
        <Route path="/messages" element={!authUser ? <Home /> : <Message />} />
        <Route
          path="/notifications"
          element={!authUser ? <Home /> : <Notification />}
        />
        <Route
          path="/createPost"
          element={!authUser ? <Home /> : <CreatePost />}
        />
        
        <Route
          path="/profile/followings/:profileId"
          element={!authUser ? <Home /> : <Following />}
        />
        <Route
          path="/profile/followers/:profileId"
          element={!authUser ? <Home /> : <Follower />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
