import React, { Component } from 'react';
import Card from "../Cards";
import images from "./images.json"
import './body.css';

class Body extends Component {
    state = {
        images,
        message: "Click a Shape to Start",
        score: 0,
        topScore: 0
    };


    render() {
        return(
        <div className = "container-fluid">
        <div className = "game-message text-center">
            <p>{this.state.message}</p>
        </div>
        <div className = "game-scores text-center">
            <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
        </div>
        <div className = "container">
        <div className = "row">
            {this.state.images.map(image =>(
                <Card
                    key = {image.id}
                    id = {image.id}
                    name = {image.name}
                    image = {image.image}
                    handleClick = {this.handleClick}
                />
            ))}
        </div>
        </div>
        </div>
        )
}
};
export default Body;
