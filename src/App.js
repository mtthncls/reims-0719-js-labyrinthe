import React, { Component } from 'react';
import './App.css';
import grid from './Components/Grid'

class App extends Component {

  render() {

    return (
      grid.map(row => (
        <div className="App" key={row}>
          {row.map(cell => (
            <div className="case" style={{
              borderColor: 'red',
              borderLeftWidth: cell.left !== 0 ? '0' : '3px',
              borderTopWidth: cell.top !== 0 ? '0' : '3px',
              borderBottomWidth: cell.down !== 0 ? '0' : '3px',
              borderRightWidth: cell.right !== 0 ? '0' : '3px',
            }} key={cell.id}>
              id={cell.id}
            </div>))}
        </div>),
      )
    )
  }
}

export default App;
