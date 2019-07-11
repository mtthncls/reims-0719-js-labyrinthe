import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import Maze from './Components/Maze';
import GameWin from './Components/GameWin';
import GameOver from './Components/GameOver';

const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isMazePageDisplayed: state.isMazePageDisplayed,
  positionPlayerOne: state.positionPlayerOne,
  positionPlayerTwo: state.positionPlayerTwo,
  isWinnerPageDisplayed: state.isWinnerPageDisplayed,
})

class App extends Component {
  render() {    
    const { isWelcomePageDisplayed, isMazePageDisplayed, positionPlayerOne, positionPlayerTwo } = this.props;
    return (
      <div className="container">
        {isWelcomePageDisplayed && !isMazePageDisplayed && <WelcomePage />}
        {isMazePageDisplayed && positionPlayerOne !=="out" && positionPlayerOne !== positionPlayerTwo && <Maze />}
        {(!isWelcomePageDisplayed && positionPlayerOne ==="out") && <GameWin />}
        {(positionPlayerOne === positionPlayerTwo) && <GameOver />}

      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
