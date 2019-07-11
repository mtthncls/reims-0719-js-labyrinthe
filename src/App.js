import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Components/Player';
import './App.css';
import grid from './Components/Grid';
import GameOver from './Components/GameOver';

const mapStateToProps = state => ({
  position: state.position,
})

class App extends Component {
  render() {
    const { position, dispatch } = this.props;
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        //Up Move
        case 38 : 
          dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].up !== 0 ? grid[position - 1].up : position });
          break;
        case 90 : 
          dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].up !== 0 ? grid[position - 1].up : position });
          break;
        //Down Move  
        case 40 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].down !== 0 ? grid[position - 1].down : position });
          break;
        case 83 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].down !== 0 ? grid[position - 1].down : position });
          break;
        //Left Move  
        case 81 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].left !== 0 ? grid[position - 1].left : position });
          break;
        case 37 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].left !== 0 ? grid[position - 1].left : position });
          break;  
        //Right Move  
        case 39 :
            dispatch({ type: 'MOVE_PLAYER', position: grid[position - 1].right !== 0 ? grid[position - 1].right : position });
          break;
        case 68 :
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
              borderColor: 'black',
              borderLeftWidth: cell.left !== 0 ? '0' : '1px',
              borderTopWidth: cell.top !== 0 ? '0' : '1px',
              borderBottomWidth: cell.down !== 0 ? '0' : '1px',
              borderRightWidth: cell.right !== 0 ? '0' : '1px',
            }}>
              id={cell.id}
              {cell.id === position && <Player />}
            </div>))}
        </div>
        {position === "out" && <GameOver />}
        <button type="button" onKeyDown = {handleKeyDown}>START</button>
      </div >
    )
  }

}

export default connect(mapStateToProps)(App);
