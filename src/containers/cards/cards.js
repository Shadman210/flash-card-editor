import React, { Component } from 'react';
import CardEditor from '../cardEditor/cardEditor'
import CardViewer from '../cardViewer/cardViewer'


    class Card extends Component {

        constructor(props){
          super(props);
          this.state={
            cards : [{font :'3+2',back : "5" },{font :'4*4',back : "16" },{font :'4*5',back : "20" }],
            editor : true
           
          }
        }
  
        switchHandeler = ()=>{
          this.setState((prevState)=>{
            return{
              editor : !prevState.editor
            }
          })
  
        }
  
        showCard = () =>{
          this.state.cards.map((cur)=>{
            return cur;
          })
        }
  
        addCardHandle = (font,back)=>{
          this.setState((prevState) =>{
            const newCard = [...prevState.cards, {font :font, back : back}]
            return ({cards : newCard})
          })
         }
  
  
  
          
            render() {
              if(this.state.editor){
              return (
                <div className="Card">
                  <CardEditor switchToViewer = {this.switchHandeler} cards ={this.state.cards} addCard ={this.addCardHandle}/>
                  
                </div>
              );
            }
              else{
                return (
                  <div className="Card">
                    <CardViewer switchToEditor = {this.switchHandeler} cards ={this.state.cards} showCard ={this.showCard}/>
                  </div>
                );
              }
          }
  
      }
  
      export default Card;