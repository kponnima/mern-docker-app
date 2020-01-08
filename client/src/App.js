import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Login from './components/Login';
import Footer from './components/Footer';
import Todo from './components/Todo';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <br></br>
      <Router>
        <div className="views">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
        </div>
      </Router>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
