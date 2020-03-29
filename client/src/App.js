import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'
import adminEntry from './pages/adminEntry'
import adminPanel from './pages/adminPanel'
import Homepage from './pages/Homepage'

import SurveyPage from './pages/SurveyPage'
import DataPage from './pages/DataPage'
import StatisticsPage from './pages/StatisticsPage'

import Home from './pages/Home'

//Components
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.css'

function App() {

  const [userID, setUserID] =   useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function adminLoggedIn() {
    // ...
    return true;
  }
  function requireAuth(nextState, replace) {
   if (!adminLoggedIn()) {
      replace({
        pathname: '/admin' // not working yet to prevent access of other pages
      })
   }
  }

  function userIDUpdate() {
    setUserID(userID);
  }
  function loggedInUpdate() {
    setIsLoggedIn(isLoggedIn);
  }

  function getIdFromUrl() {
    const params = window.location.href.split('/')
    return params[params.length - 1]
  }

  return (
      <Router>
          <div className='container'>
              <Header />
              <main>

                  <Switch> 
                    <Route exact path="/homepage/:userId" render={(props) => <Homepage {...props} getId={getIdFromUrl()} />}/>
                    <Route exact path="/survey/" render={(props) => <SurveyPage {...props} getId={getIdFromUrl()} />} />
                    <Route exact path="/survey/:userId" render={(props) => <SurveyPage {...props} getId={getIdFromUrl()} />} />
                    <Route exact path="/data/:userId" render={(props) => <DataPage {...props} getId={getIdFromUrl()} />}/>
                    <Route exact path="/admin" component={adminEntry} />
                    <Route exact path="/adminPanel" component={adminPanel} onEnter = {requireAuth}/>
                    <Route exact path="/statistics" component={StatisticsPage} onEnter = {requireAuth}/>
                    <Route exact path="/access" component={EmailEntry}></Route>
                    <Route component={Home} /> 
                  </Switch>

              </main>
            <Footer/>
          </div>
      </Router>
  );
}

export default App;