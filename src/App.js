import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const grid = [[1, 2, 3], [4, 5, 6]]
    
  return (
    grid.map(row => (
    <div className="App" key={row}>
      {row.map(cell => (
      <div className="case" key={cell}>
        id={cell}
      </div>))}
    </div>),
  )
  )}
    }

export default App;
