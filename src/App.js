import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import MyPage from './pages/Mypage/Mypage';
import Report from './pages/Report/Report';
import Search from './pages/Search/Search';
import SearchedCamera from './pages/Search/SearchedCamera';
import SearchedText from './pages/Search/SearchedText';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/camera" element={<SearchedCamera />} />
      <Route path="/search/text" element={<SearchedText />} />
    </Routes>
  );
}

export default App;
