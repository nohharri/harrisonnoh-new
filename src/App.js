import React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Body from './containers/Body/Body';
import Introduction from './containers/Introduction/Introduction';
import BlogList from './containers/BlogList/BlogList';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <BlogList />
        <Body />
        <Footer />
      </div>
      );
    }
}

export default App;
