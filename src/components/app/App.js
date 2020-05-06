import React from 'react';
import './App.css';
import NavigationBar from "../common/NavigationBar";
import Routes from "../common/Routes";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <NavigationBar />
          <Routes />
        </div>
    )
  }
}

export default App;
