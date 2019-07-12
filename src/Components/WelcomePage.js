import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';

const WelcomePage = ({ dispatch }) => {
    return (
        <main className="welcome">
            <header className="header">THE MAZE RUNNERS</header>
           <div className='logo'><img src='https://media0.giphy.com/media/WwfP2C3z1PO9PUzVfk/giphy.gif?cid=3640f6095bc0aa5c7a76355a4195ae6c' alt='logo' /> </div>

            <div className='pave'>
                <p>WELCOME, PLAYERS !</p>
                <p>WE HOPE YOU'LL ENJOY OUR BEAUTIFUL (AND DEADLY) MAZE.</p>
                <p className='red'>TO WIN THE GAME :</p>
                <div className='rules'><p>PLAYER ONE HAVE TO ESCAPE THE MAZE.</p>
                    <p>PLAYER TWO MUST TRY TO CATCH UP PLAYER ONE.</p></div>
            </div>
            <button className='enter'   onClick={() => dispatch({ type: 'DISPLAY_MAZE' })}>ENTER THE MAZE</button>
        </main>
    )
}

export default connect()(WelcomePage);
