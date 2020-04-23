import React, { Component } from "react";
import CharCard from "./components/CharCard"
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
class App extends Component {

  state = {
    characters
  };

    componentDidMount(){
      for(let i=0;i<this.state.characters.length;i++){
        console.log(this.state.characters[i])
      }
    }
  // shuffleFriend = idArray => {
  //   //on img click, save data and change image 
    
  //   const characters = this.state.characters.filter(characters => characters.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ characters });
  // };

  handleClick = e => {
    console.log(e)
    console.log("clicking: " + this)
    this.fisherYatesShuffle()
  }

  fisherYatesShuffle = () => {
    console.log("fisherYates")
    let characters=this.state.characters
    for (var i = characters.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * (i + 1))
      const currentCard = characters[i]
      const cardToSwap = characters[swapIndex]
      characters[i] = cardToSwap
      characters[swapIndex] = currentCard
    }
    console.log(characters)
    this.setState({characters: characters})
  }
  
 render() {
  return (
        <Wrapper>
          <NavBar>Clicky Game</NavBar>
          {this.state.characters.map(friend => (
            <CharCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              handleClick = {this.handleClick.bind(this, friend.id)}
            />
          ))}
          
        </Wrapper>
      );
          }
        }

export default App;

