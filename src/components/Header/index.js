import React from 'react';
import './header.css';

const Header = () => {
    return (
    <div className = "jumbotron jumbotron-fluid">
        <div className = "container text-center">
            <h1 className = "header-text">Memore<em>e</em>E</h1>
            <p classame = "Intro">Click each card only once to Win...<br />Dont lose yourself in the Shuffle!</p>
        </div>
    </div>
    );
}

export default Header;

