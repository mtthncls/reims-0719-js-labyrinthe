import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomePage from './Components/WelcomePage'
import Maze from './Components/Maze'

import './App.css';


const mapStateToProps = state => ({
  isMazePageDisplayed: state.isMazePageDisplayed,
  position: state.position,
})

class App extends Component {
  render() {
    const { isMazePageDisplayed } = this.props;
    return (

      <div className="container">
        {!isMazePageDisplayed && <WelcomePage />}
        {isMazePageDisplayed && <Maze />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
