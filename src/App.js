import React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Body from './containers/Body/Body';
import ExternalLinks from './containers/ExternalLinks/ExternalLinks';

import './App.css';

class App extends React.Component {

  async getPhotos() {
    const res = await fetch('/api/photos');
    const photos = await res.json();
    console.log(photos);
  }

  componentDidMount() {
    console.log('mounted');
    this.getPhotos();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a> */}
        </header>
        <ExternalLinks />
        <Body />
        <Footer />
      </div>
      );
    }
}

export default App;
