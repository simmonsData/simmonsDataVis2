import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'
import Homepage from './pages/Homepage'


//Components
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.css'

function App() {
  return (
      <Router>
          <div className='container'>
            <Header/>
              <main>
                  <Route exact path="/" component={EmailEntry} />
                  <Route exact path="/Homepage" component={Homepage} />
                  <Route exact path="/survey" component={EmailEntry} />
                  <Route exact path="/data" component={EmailEntry} />
              </main>
            <Footer/>
          </div>
      </Router>
  );
}

export default App;
