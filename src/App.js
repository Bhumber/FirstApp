import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import dialogsData from './Data/DialogsData/DialogsData';
// import messData from './Data/MessagesData/MessagesData';
// import postData from './Data/PostsData/PostsData';

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile' element={<Profile posts={props.posts} />} />
              <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
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
