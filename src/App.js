import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Post from "./components/Profile/MyPosts/Posts/Post";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


import {Routes, Route, Link} from 'react-router-dom'


const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div class="app-wrapper-content">
                  <Routes>
                      <Route path="/profile" element={<Profile/>} />
                      <Route path="/dialogs" element={<Dialogs/>} />
                      <Route path="/news" element={<News/>} />
                      <Route path="/music" element={<Music/>} />
                      <Route path="/settings" element={<Settings/>} />
                      <Route path="*" element={<Profile/>} />
                  </Routes>
              </div>
          </div>
          );
};

export default App;
