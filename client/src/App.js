import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Login from './components/Login';
import Footer from './components/Footer';
import Todo from './components/CarDetails';
import BuildCar from './components/BuildCar';
import BuildCarPriceResult from './components/BuildCarPriceResult';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <br />
          <br />
          <br />
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/build-and-price' component={BuildCar} />
            <Route path='/build-and-price-result' component={BuildCarPriceResult} />
          </div>
          <br />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
