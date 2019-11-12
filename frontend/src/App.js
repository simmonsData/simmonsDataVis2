import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'
import Homepage from './pages/Homepage'


//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Survey from './components/SurveyPage'
import SpiderChart from './components/SpiderChart'

import './styles/App.css'

function App() {

  const[userID, setUserID] = useState('');

  function userLogged(id) { setUserID(id);};

  return (
<<<<<<< HEAD
    <Router>
      <div className='container'>
        <main>
          <Route exact path="/" component={Survey} />
        </main>
        <Footer/>
      </div>
    </Router>
||||||| merged common ancestors
    <Router>
      <div className='container'>
        <main>
          <Route exact path="/" component={EmailEntry} />
        </main>
        <Footer/>
      </div>
    </Router>
=======
      <Router>
          <div className='container'>
            <Header/>
              <main>
                  <Route exact path="/" render={(props) => <EmailEntry {...props} userLogged={userLogged.bind(this)} />}/>
                  <Route exact path="/Homepage" component={Homepage} />
                  <Route exact path="/survey" component={Homepage} />
                  <Route exact path="/data" component={Homepage} />
              </main>
            <Footer/>
          </div>
      </Router>
>>>>>>> master
  );
}

export default App;
