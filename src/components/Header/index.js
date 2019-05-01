import React from 'react';
import './header.css';

const Header = props => {
    return (
    <div className = "jumbotron">
        <div className = "container text-center">
            <h1 className = "header-text">Memore<em>e</em>E</h1>
            <p classame = "Intro">Click each card only once to Win...<br />Dont lose yourself in the Shuffle!</p>
            <div className = "game-message text-center">
            <p>{props.message}</p>
      </div>
        <div className = "game-scores text-center">
            <p>Score: {props.score} | Top Score: {props.topScore}</p>
      </div>
        </div>
    </div>
    );
}

export default Header;

