import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from './components/Header';
import Search from './components/Search';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Search />
      </div>
    );
  }
}

export default App;
