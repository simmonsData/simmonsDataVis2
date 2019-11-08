import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'

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
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
