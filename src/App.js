import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <div className="header">
                <Header/>
            </div>
            <div className="nav">
                <Nav/>
            </div>
            <div className="content">
                <Route path='/profile' render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText} /> } />

                <Route path='/dialogs' render={() => <Dialogs
                            state={props.state.dialogsPage} /> } />

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
