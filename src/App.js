import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import Maze from './Components/Maze';
import GameOver from './Components/GameOver';

const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isMazePageDisplayed: state.isMazePageDisplayed,
  position: state.position,
  isWinnerPageDisplayed: state.isWinnerPageDisplayed,
})

class App extends Component {
  render() {    
    const { isWelcomePageDisplayed, isMazePageDisplayed, position } = this.props;
    return (
      <div className="container">
        {isWelcomePageDisplayed && !isMazePageDisplayed && <WelcomePage />}
        {isMazePageDisplayed && position !=="out" && <Maze />}
        {!isWelcomePageDisplayed && position ==="out" && <GameOver />}
      </div>
    )
  }

}

export default connect(mapStateToProps)(App);
