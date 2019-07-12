/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';
import '../App.css';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import GameOver from './GameWin';
import Key from './Key';
import KeyFound from './KeyFound'

const mapStateToProps = state => ({
    positionPlayerOne: state.positionPlayerOne,
    positionPlayerTwo: state.positionPlayerTwo,
    positionKey: state.positionKey,
    isKeyFound: state.isKeyFound,
    grid: state.grid,
    count: state.count,
})

    const Maze = ({ positionPlayerOne, positionPlayerTwo, positionKey, isKeyFound, grid, dispatch, count }) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => { window.removeEventListener('keydown', handleKeyDown) }
  }, [])

  const handleKeyDown = (event) => {
    event.preventDefault()
    switch (event.keyCode) {
      //Up Move
      case 90:
        dispatch({ type: 'MOVE_PLAYER_ONE_UP' });
        break;
      case 38:
        dispatch({ type: 'MOVE_PLAYER_TWO_UP' });
        break;
      //Down Move  
      case 83:
        dispatch({ type: 'MOVE_PLAYER_ONE_DOWN' });
        break;
      case 40:
        dispatch({ type: 'MOVE_PLAYER_TWO_DOWN' });
        break;
      //Left Move  
      case 81:
        dispatch({ type: 'MOVE_PLAYER_ONE_LEFT' });
        break;
      case 37:
        dispatch({ type: 'MOVE_PLAYER_TWO_LEFT' });
        break;
      //Right Move  
      case 68:
        dispatch({ type: 'MOVE_PLAYER_ONE_RIGHT' });
        break;
      case 39:
        dispatch({ type: 'MOVE_PLAYER_TWO_RIGHT' });
        break;
      default:
        console.log("default");
    }
  }

  return (
    <div>
      <header className="header">THE MAZE RUNNERS</header>
      <object type="audio/mpeg" width="0" height="0" data="fichier.mp3">
        <param name="filename" value="fichier.mp3" />
        <param name="autostart" value="true" />
        <param name="loop" value="false" />
      </object>
      <div className="row">
        {grid.map(cell => (
          <div className="case" key={cell.id} style={{
            borderColor: '#aa3311',
            borderLeftColor: cell.left !== 0 && "grey",
            borderTopColor: cell.top !== 0 && "grey",
            borderBottomColor: cell.down !== 0 && "grey",
            borderRightColor: cell.right !== 0 && "grey",
            borderLeftWidth: cell.left !== 0 ? '3px' : '3px',
            borderTopWidth: cell.top !== 0 ? '5px' : '5px',
            borderBottomWidth: cell.down !== 0 ? '5px' : '5px',
            borderRightWidth: cell.right !== 0 ? '3px' : '3px',

          }}>
            {cell.id === positionPlayerOne && <PlayerOne />}
            {cell.id === positionPlayerTwo && count === 0 && <PlayerTwo />}
            {(cell.id === positionKey && !isKeyFound) && <Key />}
          </div>))}

      </div>
      {isKeyFound && positionPlayerOne === positionKey && <KeyFound />}
      {positionPlayerOne === "out" && <GameOver />}
    </div>
  )
}

export default connect(mapStateToProps)(Maze);
