import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';

const WelcomePage = ({ dispatch }) => {
    return (
        <main className="welcome">
            <header className="header">THE MAZE RUNNERS</header>
           <div className='logo'><img className="homePic" src='https://media0.giphy.com/media/WwfP2C3z1PO9PUzVfk/giphy.gif?cid=3640f6095bc0aa5c7a76355a4195ae6c' alt='logo' /> </div>

            <div className='pave'>
                <p>WELCOME, PLAYERS !</p>
                <p>WE HOPE YOU'LL ENJOY OUR BEAUTIFUL (AND DEADLY) MAZE.</p>
                <p className='red'>TO WIN THE GAME :</p>
                <div className='rules'><p>PLAYER ONE HAVE TO GRAB THE KEY TO OPEN THE DOOR AND ESCAPE THE MAZE.</p>
                    <p>PLAYER TWO, 2 SECONDS LATER, MUST TRY TO CATCH UP PLAYER ONE BEFORE HE ESCAPES
                          .</p></div>
                <img src="https://vignette.wikia.nocookie.net/diepio/images/9/93/WASD.png/revision/latest?cb=20181206065147" alt="keyboard" height="180vh" width="260vh"/>
                <p>Player One <span>-</span> Player Two</p>  
            </div>
            <button className='enter'   onClick={() => dispatch({ type: 'DISPLAY_MAZE' })}>ENTER THE MAZE</button>
        </main>
    )
}

export default connect()(WelcomePage);
