import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Community from './pages/Community';
import EventDetail from './pages/EventDetail';
import Groups from './pages/Groups';
import Hookups from './pages/Hookups';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import Messaging from './pages/Messaging';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Badges from './pages/Badges';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/hookups" element={<Hookups />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
