import React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Introduction from './containers/Introduction/Introduction';
import BlogList from './containers/BlogList/BlogList';
import background from './static/mountain.jpg';
import Code from './containers/Code/Code';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { Parallax } from 'react-parallax';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route path="/code">
              <div className="content">
                <Header />
                <Code />
              </div>
            </Route>

            <Route path="/">
              <Parallax bgImage={background} strength={300} className="background">
                <div className="fakeBackground">
                  <Header />
                  <Introduction />
                </div>
              </Parallax>
              <BlogList />
            </Route>
            
          </Switch>

          <Footer />

        </div>
      </Router>
      );
    }
}

export default App;
