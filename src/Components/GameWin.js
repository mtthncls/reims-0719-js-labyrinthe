import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';


const GameWin = ({ dispatch }) => {
    return (
        <main className="welcome">
            <header className="welcome-page-header">THE MAZE RUNNERS</header>
            <div className='pave'>
                <img src="https://cdn2.pu.nl/media/laura/mariodans.gif" alt="mario"/>
                <p>GOOD JOB !</p>
                <p>YOU FOUND THE EXIT</p>
                <p>IF YOU WANT TO RETRY, PLEASE PRESS TO THE BUTTON BELOW</p>
            </div>
            <button onClick={() => dispatch({ type: 'RETRY' })}>RETRY</button>
        </main>
    )
}

export default connect()(GameWin);
