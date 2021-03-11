import React from 'react';
import Footer from './containers/Footer/Footer';
import Code from './containers/Code/Code';
import Travel from './containers/Travel/Travel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './containers/Home/Home';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/code" component={Code} />
            <Route path="/travel" component={Travel} />
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>

          <Footer />

        </div>
      </Router>
      );
    }
}

export default App;
