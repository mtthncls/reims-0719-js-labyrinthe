import React from 'react';
import { connect } from 'react-redux';
import grid from './Grid';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import GameOver from './GameOver';

const mapStateToProps = state => ({
    positionPlayerOne: state.positionPlayerOne,
    positionPlayerTwo: state.positionPlayerTwo,
})

const Maze = ({ positionPlayerOne, positionPlayerTwo, dispatch }) => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        //Up Move
        case 90 : 
          dispatch({ type: 'MOVE_PLAYER', positionPlayerOne: grid[positionPlayerOne - 1].up !== 0 ? grid[positionPlayerOne - 1].up : positionPlayerOne, positionPlayerTwo : positionPlayerTwo });
          break;
        case 38 : 
          dispatch({ type: 'MOVE_PLAYER', positionPlayerTwo: grid[positionPlayerTwo - 1].up !== 0 ? grid[positionPlayerTwo - 1].up : positionPlayerTwo, positionPlayerOne: positionPlayerOne });
          break;
        //Down Move  
        case 83 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerOne: grid[positionPlayerOne - 1].down !== 0 ? grid[positionPlayerOne - 1].down : positionPlayerOne, positionPlayerTwo: positionPlayerTwo });
          break;
        case 40 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerTwo: grid[positionPlayerTwo - 1].down !== 0 ? grid[positionPlayerTwo - 1].down : positionPlayerTwo, positionPlayerOne: positionPlayerOne });
          break;
        //Left Move  
        case 81 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerOne: grid[positionPlayerOne - 1].left !== 0 ? grid[positionPlayerOne - 1].left : positionPlayerOne, positionPlayerTwo: positionPlayerTwo });
          break;
        case 37 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerTwo: grid[positionPlayerTwo - 1].left !== 0 ? grid[positionPlayerTwo - 1].left : positionPlayerTwo, positionPlayerOne: positionPlayerOne });
          break;  
        //Right Move  
        case 68 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerOne: grid[positionPlayerOne - 1].right !== 0 ? grid[positionPlayerOne - 1].right : positionPlayerOne, positionPlayerTwo: positionPlayerTwo });
          break;
        case 39 :
            dispatch({ type: 'MOVE_PLAYER', positionPlayerTwo: grid[positionPlayerTwo - 1].right !== 0 ? grid[positionPlayerTwo - 1].right : positionPlayerTwo, positionPlayerOne: positionPlayerOne });
          break;
      default : 
        console.log("default");
      }
    }
    return (
        <div>
            <button type="button" onKeyDown = {handleKeyDown}>START</button>
            <div className="row">
                {grid.map(cell => (
                    <div className="case" key={cell.id} style={{
                        borderColor: '#aa3311',
                        borderStyle: 'dashed',
                        borderLeftColor: cell.left !== 0 && "grey",
                        borderTopColor: cell.top !== 0 && "grey",
                        borderBottomColor: cell.down !== 0 && "grey",
                        borderRightColor: cell.right !== 0 && "grey",
                        borderLeftWidth: cell.left !== 0 ? '3px' : '3px',
                        borderTopWidth: cell.top !== 0 ? '5px' : '5px',
                        borderBottomWidth: cell.down !== 0 ? '5px' : '5px',
                        borderRightWidth: cell.right !== 0 ? '3px' : '3px',

                    }}>
                        id={cell.id}
                        {cell.id === positionPlayerOne && <PlayerOne />}
                        {cell.id === positionPlayerTwo && <PlayerTwo />}
                    </div>))}
            </div>
            {positionPlayerOne === "out" && <GameOver />}
        </div>
    )
}

export default connect(mapStateToProps)(Maze);
