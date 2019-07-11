import React from 'react';
import { connect } from 'react-redux';


const WelcomePage = () => {
    return (
        <main>
            <header className="welcome-page-header">THE MAZE RUNNERS</header>

            <div>
                <p>WELCOME, PLAYERS !</p>
                <p>WE HOPE YOU'LL ENJOY OUR BEAUTIFUL (AND DEADLY) MAZE.</p>
                <p>TO WIN THE GAME :</p>
                <p>PLAYER ONE WILL HAVE TO ESCAPE THE MAZE.</p>
                <p>PLAYER TWO WILL HAVE TO TRY TO CATCH UP PLAYER ONE OR ESCAPE THE MAZE FIRST.</p>
            </div>
            <button>ENTER THE MAZE</button>
        </main>
    )
}

export default (WelcomePage);
