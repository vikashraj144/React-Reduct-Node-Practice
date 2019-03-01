import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';
import Practice from './components/Practice';
import PageNotFound from './components/PageNotFound';
import ComLifeCycle from './components/topics/ComLifeCycle';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './components/layout/Footer';

const leftContainer = {
  background: 'yellow',
  border: '2px solid pink'
};

const rightContainer = {
  color: 'red',
  border: '2px solid pink'
};
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header subtitle="React Practice"/>
          {/* <Container> */}
            <Row>
              <Col xs={2} style={leftContainer}>
                <Sidebar/>
              </Col>
              <Col xs={10} style={rightContainer}>
                  <Switch>
                      <Route path='/' component={Home} exact/>
                      <Route path='/practice' component={Practice} />
                      <Route path='/lifeCycle' component={ComLifeCycle} />
                      <Route path='/404Error' component={PageNotFound} />
                  </Switch>
              </Col>
            </Row>
          {/* </Container> */}
          <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
