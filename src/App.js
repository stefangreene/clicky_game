import React, {Component} from 'react';
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
      images,
      message: "Click a Shape to Start",
      score: 0,
      topScore: 0
  };

  handleClick = (id, clicked) => {

        const imageOrder = this.state.images;

        if(clicked) {
          imageOrder.forEach((image,index) => {
              imageOrder[index].clicked = false;
          });
        return this.setState({
          image: imageOrder.sort(() => Math.random() -0.5),
          message: "Wrong Guess!!",
          score: 0
        })
      }
      else{
        imageOrder.forEach((image, index) => {
          if (id === image.id){
            imageOrder[index].clicked = true;
          }
        });
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;

        return this.setState({
          image: imageOrder.sort(() => Math.random() - 0.5),
          message: "You Guessed Right!",
          score: newScore,
          topScore: newTopScore,

      })
  }
};

render() {
  return (
    <div className="App">
    <Header {...this.state.score}/>
    <Body>
    
            {this.state.images.map(image =>(
                <Card
                    key = {image.id}
                    id = {image.id}
                    name = {image.name}
                    image = {image.image}
                    handleClick = {this.handleClick}
                />
            ))}
      
      </Body>
    <Footer />
    </div>
    );
  }
}
export default App;