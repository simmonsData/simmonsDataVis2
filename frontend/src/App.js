import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'
import adminEntry from './pages/adminEntry'
import Homepage from './pages/Homepage'
import SurveyPage from './pages/SurveyPage';

//Components
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.css'

function App() {

    const[userID, setUserID] = useState('');

    function userLogged(id) { setUserID(id);};

    return (
        <Router>
            <div className='container'>
                <Header/>
                <main>
                    <Route exact path="/" render={(props) => <EmailEntry {...props} userLogged={userLogged.bind(this)} />}/>
                    <Route exact path="/Homepage" component={Homepage} />
                    <Route exact path="/survey" component={SurveyPage} />
                    <Route exact path="/data" component={Homepage} />
                    <Route exact path="/admin" component={adminEntry} />
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;