import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> This is some fine text</h1>
          <img src={logo} className="App-logo"/>
        </header>
        <Confirm 
          title="React and TypeScript"
          content="Are you sure you want to learn React and"     
        />
      </div>


    );
  }
}

export default App;

