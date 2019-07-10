import React, { Component } from 'react';
import './App.css';
import grid from './Components/Grid'

class App extends Component {

  render() {

    return (
      grid.map(row => (
        <div className="App" key={row}>
          {row.map(cell => (
            <div className="case" key={cell.id}>
              id={cell.id}
            </div>))}
        </div>),
      )
    )
  }
}

export default App;
