import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomePage from './Components/WelcomePage'
import Maze from './Components/Maze'

import './App.css';


const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isMazePageDisplayed: state.isMazePageDisplayed,
  position: state.position,
})

class App extends Component {
  render() {
    const { isWelcomePageDisplayed, isMazePageDisplayed } = this.props;
    return (

      <div className="container">
        {isWelcomePageDisplayed && !isMazePageDisplayed && <WelcomePage />}
        {isMazePageDisplayed && <Maze />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
