/* eslint-disable no-fallthrough */
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
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 38 : 
          dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].up !== 0 ? grid[position - 1].up : position });
          break;
        case 40 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].down !== 0 ? grid[position - 1].down : position });
          break;
        case 37 :
          dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].left !== 0 ? grid[position - 1].left : position });
          break;
        case 39 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].right !== 0 ? grid[position - 1].right : position });
          break;
      default : 
        console.log("default");
      }
    }
    return (
      <div className="container">
        <div className="row">
          {grid.map(cell => (
            <div className="case" key={cell.id} style={{
              borderColor: 'red',
              borderLeftWidth: cell.left !== 0 ? '0' : '3px',
              borderTopWidth: cell.top !== 0 ? '0' : '3px',
              borderBottomWidth: cell.down !== 0 ? '0' : '3px',
              borderRightWidth: cell.right !== 0 ? '0' : '3px',
            }}
            >
              id={cell.id}
              {cell.id === position && <Player />}
            </div>))}
        </div>
        <button type="button" onKeyDown = {handleKeyDown}>START</button>
      </div >
    )
  }

}

export default connect(mapStateToProps)(App);
