import React, { Component } from "react";
import CharCard from "./components/CharCard"
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
class App extends Component {

  state = {
    characters,
    score: 0,
    highScore: 0,
    message: "Click Image to Begin!"
  };

    componentDidMount(){
      for(let i=0;i<this.state.characters.length;i++){
        console.log(this.state.characters[i])
      }
    }


  handleClick = (id, clicked) => {
  
    console.log(this.state.characters[id].clicked)
    if (!clicked && this.state.score < 11) {
       let characters = this.state.characters.map(character => {
         //create new array and loop over
         if (character.id === id) {
           character.clicked = true
           console.log(id)
          
    // this.fisherYatesShuffle()
          }
           return character
         })
       this.setState({
          score: this.state.score + 1,
          characters: characters,
          message: "Nice Work!"
       })
       } else {
      console.log("yeah")
    }
    // let friendCheck = this.state.characters
    // for(let i=0;i<friendCheck.length;i++){
    //   if(e===friendCheck[i].id){
    //     //loss check
    //     if(friendCheck[i].clicked === false){
    //       this.setState ({
    //         score: this.state.score +1,
    //         characters: characters
    //       })
    //       // resetState(){
    //           // this.setState({friendCheck[i].clicked === false})
    //       //run reset of all the friendCheck[i].clicked to false

    //     } else if (friendCheck[i].clicked === true){
    //       this.setState ({
            
    //       })
    //     }
    //       //change the value of friendCheck[i].clicked to true
    //       //follow logic for incrementing score
    //       //set State with friendCheck array
    //       this.setState({characters:friendCheck})
          
    //     }
       
  
    console.log(id)
    console.log(characters)
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
    
    this.setState({characters: characters})
  }
  
 render() {
  return (
    <div> 
       
          <NavBar
            score={this.state.score}
            highScore={this.state.highScore}
            message={this.state.message}
          />
          <Wrapper>
          {this.state.characters.map(friend => (
            <CharCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              handleClick = {this.handleClick}
              clicked = {friend.clicked}
            />
          ))
          
          }
          
        </Wrapper>
        </div>
      )
          }
        }
          

export default App;

