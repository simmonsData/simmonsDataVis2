import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'

//Components
import Footer from './components/Footer'
import Survey from './components/SurveyPage'
import SpiderChart from './components/SpiderChart'

import './styles/App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <main>
          <Route exact path="/" component={Survey} />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
