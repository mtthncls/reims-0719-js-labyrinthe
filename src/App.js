import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Components/player';
import './App.css';
import grid from './Components/Grid'

const mapStateToProps = state => ({
  position : state.position,
})

class App extends Component {
  render() {
    const { position } = this.props;
    console.log(position)
    return (
      grid.map(row => (
        <div className="App" key={row}>
          {row.map(cell => (
            <div className="case" key={cell.id}>
              id={cell.id}
              {cell.id === position && <Player />}
            </div>))}
        </div>),       
      )
    )
  }
}

export default connect(mapStateToProps)(App);
