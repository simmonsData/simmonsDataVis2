import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

//Pages
import EmailEntry from './pages/EmailEntry'
import adminEntry from './pages/adminEntry'
import adminPanel from './pages/adminPanel'
import Homepage from './pages/Homepage'
import SurveyPage from './pages/SurveyPage'
import DataPage from './pages/DataPage'

//Components
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.css'

function App() {

  const[user, setUser] = useState({});

  async function userLogged(id) {
    const response = await axios.get(
      'http://localhost:8080/api/students/' + id,
      { headers: { 'Content-Type': 'application/json' } }
    )

    setUser(response.data);
    console.log(user);
  };

  return (
      <Router>
          <div className='container'>
            <Header/>
              <main>
                  <Route exact path="/" render={(props) => <EmailEntry {...props} userLogged={userLogged.bind(this)} />}/>
                  <Route exact path="/homepage" render={(props) => <Homepage {...props} user={user} />}/>
                  <Route exact path="/survey" render={(props) => <SurveyPage {...props} user={user} />} />
                  <Route exact path="/data" render={(props) => <DataPage {...props} user={user} />}/>
                  <Route exact path="/admin" component={adminEntry} />
                  <Route exact path="/adminPanel" component={adminPanel} />
              </main>
            <Footer/>
          </div>
      </Router>
  );
}

export default App;