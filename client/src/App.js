import React, { Component } from "react";
import CharCard from "./components/CharCard"
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
class App extends Component {

  state = {
    characters,
    score:0,
    highScore:0
  };

    componentDidMount(){
      for(let i=0;i<this.state.characters.length;i++){
        console.log(this.state.characters[i])
      }
    }


  handleClick = e => {
    console.log(e)
    var friendCheck =this.state.characters
    for(i=0;i<friendCheck.length;i++){
      if(e===friendCheck[i].id){
        //loss check
        if(friendCheck[i].clicked === true){
          this.setState ({
            score: 0,
          }
            resetState(){
              return this.setState({friendCheck[i].clicked === false}})
              };

          )
          //run reset of all the friendCheck[i].clicked to false

        })else//win condition
        if(friendCheck[i].clicked === false){
          this.setState ({
            
          })
        }
          //change the value of friendCheck[i].clicked to true
          //follow logic for incrementing score
          //set State with friendCheck array
          this.setState({characters:friendCheck})
          
        }
      }
    }

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

