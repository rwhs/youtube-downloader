import React from "react";
import { Route, Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';


// Components
import Header from './components/Header';
import Downloader from './components/Downloader';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Downloader />
      </div>
    );
  }
}

export default App;
