import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import EmailEntry from './pages/EmailEntry'
import adminLogin from './pages/adminLogin'

//Components
import Footer from './components/Footer'

import './styles/App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <main>
          <Route exact path="/" component={EmailEntry} />
          <Route exact path="/admin" component={adminLogin} />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
