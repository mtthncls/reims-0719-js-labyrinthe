import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';

const GameWin = ({ dispatch }) => {
    return (
        <main className="welcome2">
            <header className="header">THE MAZE RUNNERS</header>
            <div className='pave'>
                <img src="https://ideedalcyberspazio.files.wordpress.com/2017/12/tumblr_otyxzbbqky1rv6iido1_500.gif?w=630" alt="bowser" />
                <p>MOUHAHAHA LOSER!</p>
                <p>YOU SUCK BRO !!</p>
                <p>IF YOU WANT TO RETRY, PLEASE PRESS TO THE BUTTON BELOW</p>
            </div>
            <button onClick={() => dispatch({ type: 'RETRY' })}>RETRY</button>
        </main>
    )
}

export default connect()(GameWin);
