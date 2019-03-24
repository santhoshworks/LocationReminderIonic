import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
// import Header from './scripts/components/header';
import Dashboard from './pages/Dashboard';
// import { IonApp } from '@ionic/react'; 
class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
    
  }
}

export default App;