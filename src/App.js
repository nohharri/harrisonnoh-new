import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Body from './containers/Body/Body';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"><Header /></div>
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
      <Body />
      <Footer />
    </div>
  );
}

export default App;
