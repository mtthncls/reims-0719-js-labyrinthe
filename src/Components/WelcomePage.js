import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css';

const mapStateToProps = state => ({
    count: state.count
})

const WelcomePage = ({ dispatch }) => {
    const startTimer = () => dispatch({ type: 'TIME'}) 

    return (
        <main className="welcome">
            <header className="welcome-page-header"><div className='logo'><img src='https://i.imgur.com/VTCOhU6.png' alt='logo' /> </div></header>

            <div className='pave'>
                <p>WELCOME, PLAYERS !</p>
                <p>WE HOPE YOU'LL ENJOY OUR BEAUTIFUL (AND DEADLY) MAZE.</p>
                <p className='red'>TO WIN THE GAME :</p>
                <div className='rules'><p>PLAYER ONE HAVE TO ESCAPE THE MAZE.</p>
                    <p>PLAYER TWO MUST TRY TO CATCH UP PLAYER ONE.</p></div>
            </div>
            <button className='enter' onClick={() => dispatch({ type: 'DISPLAY_MAZE', count: setInterval(startTimer, 1000) })}>ENTER THE MAZE</button>
        </main>
    )
}

export default connect(mapStateToProps)(WelcomePage);
