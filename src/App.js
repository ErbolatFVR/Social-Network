import './App.css';
import React    from 'react';
import {Route}  from 'react-router-dom';
import Nav      from './Components/Navbar/Navbar';
import News     from './Components/News/News';
import Music    from './Components/Music/Music';
import Header   from './Components/Header/Header';
import Profile  from './Components/Profile/Profile';
import Dialogs  from './Components/Dialogs/Dialogs';
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <div className="header"><Header/></div>
            <div className="nav"><Nav/></div>
            <div className="content">
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.dialogsPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
