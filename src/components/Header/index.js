import React from 'react';
import './header.css';

const Header = props => {
    return (
    <div className = "jumbotron">
        <div className = "container">
            <h1 className = "header-text">MemoryClick</h1>
            <p classame = "Intro">Click each card only once to Win...<br />Dont lose yourself in the Shuffle!</p>
            <div className = "game-message">
            <p>{props.message}</p>
      </div>
        <div className = "game-scores">
            <p>Score: {props.score} | Top Score: {props.topScore}</p>
       </div>
    </div>
</div>
    );
}

export default Header;

