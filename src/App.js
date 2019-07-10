import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Components/player';
import './App.css';
import grid from './Components/Grid'

const mapStateToProps = state => ({
  position: state.position,
})

class App extends Component {
  render() {
    const { position, dispatch } = this.props;
    return (
      <div className="container">
        <div className="row">
        {grid.map(cell => (
          <div className="case" key={cell.id}>
            id={cell.id}
            {cell.id === position && <Player />}
          </div>))}
        </div> 
        <button type="button" onClick={e => dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].up })}>Up</button>
        <button type="button" onClick={e => dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].down })}>Down</button>
        <button type="button" onClick={e => dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].right })}>Right</button>
        <button type="button" onClick={e => dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].left })}>Left</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
