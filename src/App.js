import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Friends from './Components/Friends/Friends';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
              <Route path='/friends' element={<Friends state={props.state.friendsPage}/>} />
              <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} updateMessText={props.updateMessText} addMessage={props.addMessage} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>  
          </div>
        </div>   
      </BrowserRouter>   
  );
}



export default App;
