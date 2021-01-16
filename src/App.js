import React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Body from './containers/Body/Body';
import Introduction from './containers/Introduction/Introduction';
import BlogList from './containers/BlogList/BlogList';
import background from './static/mountain.jpg';

import './App.css';
import { Parallax } from 'react-parallax';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Parallax bgImage={background} strength={300} className="section background">
          <div className="fakeBackground">
            <Header />
            <Introduction />
          </div>
        </Parallax>
        <BlogList className="section" />
        <Body />
        <Footer />
      </div>
      );
    }
}

export default App;
