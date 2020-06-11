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
    this.fisherYatesShuffle()
    console.log(this.state.characters[id].clicked)
    if (!clicked && this.state.score < 11) {
       let characters = this.state.characters.map(character => {
         //create new array and loop over
         if (character.id === id) {
           character.clicked = true
           console.log(id)
          }
           return character
         })
       this.setState({
          score: this.state.score + 1,
          characters: characters,
          message: "Nice Work!"
       })
       } else if (!clicked && this.state.score === 11) {
        let characters = this.state.characters.map(character => {
          character.clicked=false
          return character
        })
        this.setState({
          characters: characters,
          score: 0,
          highScore: 0,
          message: "Winner"
        })
       } else {
         if(this.state.highScore < this.state.score){
           let highScore = this.state.score
           this.setState({
             highScore: highScore,
            })
          }else {
            this.setState({
              highScore: this.state.highScore
            })
          } 
          let characters = this.state.characters.map(character => {      
            character.clicked = false 
            return character
    
       }) 
       this.setState({
         characters: characters,
         score: 0,
         message: "Sorry, Try again!"


       })
       }
    
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

