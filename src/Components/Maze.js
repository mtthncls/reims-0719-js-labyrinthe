import React from 'react';
import { connect } from 'react-redux';
import grid from './Grid';
import Player from './Player';
import GameOver from './GameOver';

const mapStateToProps = state => ({
    position: state.position,
})

const Maze = ({ position, dispatch }) => {
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
        <div>
            <button type="button" onKeyDown = {handleKeyDown}>START</button>
            <div className="row">
                {grid.map(cell => (
                    <div className="case" key={cell.id} style={{
                        borderColor: '#aa3311',
                        borderStyle: 'dashed',
                        borderLeftWidth: cell.left !== 0 ? '0px' : '3px',
                        borderTopWidth: cell.top !== 0 ? '0px' : '3px',
                        borderBottomWidth: cell.down !== 0 ? '0px' : '3px',
                        borderRightWidth: cell.right !== 0 ? '0px' : '3px',
                    }}>
                        id={cell.id}
                        {cell.id === position && <Player />}
                    </div>))}
            </div>
            {position === "out" && <GameOver />}
        </div>
    )
}

export default connect(mapStateToProps)(Maze);
