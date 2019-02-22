import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/atoms/button/Button.scss';
import { Tag } from './components/atoms/tag/Tag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <i className="fas fa-igloo"></i>Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="a-btn">Sample</div>
          <Tag icon="priceTag">children</Tag>
          <Tag icon="heart">children</Tag>
          <Tag icon="textBubble">children</Tag>
        </header>
      </div>
    );
  }
}

export default App;
