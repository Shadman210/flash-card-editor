import React,{Component} from 'react'

class CardViewer extends Component {
    constructor(props){
      super(props);
      this.state={
        font : true,
        currentCard :0
      }
    }

    switchToEditor = () =>{
      this.props.switchToEditor();
   }
   nextCard = () =>{
     this.setState((prevState) => {
       return {
         currentCard : (prevState.currentCard + 1) % this.props.cards.length ,
         font : true
       }
     })
   }
   flipCard = () =>{
    this.setState({font : !this.state.font})

   }


    render() {
      const cards =this.props.cards;
      return (
        <div className="viewer">
          <h1>Card Viewer</h1> 
          <div className ="view" onClick ={this.flipCard}>
          <h2>{cards[this.state.currentCard][this.state.font? "font":"back"]}</h2>  
          </div>


          <button value = "" onClick = {this.nextCard}>New Card</button>
          
            <hr/>
            <button onClick = {this.switchToEditor}>Go To CardEditor</button>
        </div>
      );
    }

  } 

  export default CardViewer;

