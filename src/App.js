import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header subtitle="React Practice"/>
              <Sidebar/>
              <div className={'rightContentContainer'}>
                    <div className="leftContentContainer">
                    <Switch>
                        <Route path='/' component={Home} exact/>
                    </Switch>
                    </div>
                </div>
          </div>
      </Router>
    );
  }
}

export default App;
