import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import axios from 'axios';
import './App.css';
import StepOne from '../pages/StepOne/StepOne';
import StepTwo from '../pages/StepTwo/StepTwo';
import StepThree from '../pages/StepThree/StepThree';
import StepFour from '../pages/StepFour/StepFour';
import StepFive from '../pages/StepFive/StepFive';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={StepOne} />
            <Route exact path='/2' component={StepTwo} />
            <Route exact path='/3' component={StepThree} />
            <Route exact path='/4' component={StepFour} />
            <Route exact path='/5' component={StepFive} />
            <Route exact path='/admin' component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
