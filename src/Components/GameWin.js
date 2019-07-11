import React from 'react';
import { connect } from 'react-redux';


const GameWin = ({ dispatch }) => {
    return (
        <main>
            <header className="welcome-page-header">THE MAZE RUNNERS</header>

            <div>
                <p>GOOD JOB !</p>
                <p>YOU FIND THE EXIT</p>
                <p>IF YOU WANT TO RETRY, PLEASE PRESS TO THE BUTTON BELOW</p>
            </div>
            <button onClick={() => dispatch({ type: 'RETRY' })}>RETRY</button>
        </main>
    )
}

export default connect()(GameWin);