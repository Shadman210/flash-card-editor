import React,{Component} from 'react'


class CardEditor extends Component {
    constructor(props){
      super(props);
      this.state={
        font : "",
        back : ""
      }
    }
  
    switchToViewer = () =>{
      this.props.switchToViewer();
   }
  
  
  
   handleInput = (element)=>{
  
    this.setState({[element.target.name] : element.target.value});
   }
  
   addToCard = () =>{
    this.props.addCard(this.state.font,this.state.back);
    this.setState({font : "", back : ""})
   }
  
  
  
  
    render() { 
      const rows = this.props.cards.map((card) =>{
        return(
          <tr>
          <td>{card.font}</td>
          <td>{card.back}</td>
          <td><button>Delete</button>
          </td>
          </tr>
          
        )
      })
      return (
        <div className="editor">
           <h1>Card Editor</h1> 
           <hr/>
           <table>
             <thead>
             <tr>
                <th>FONT</th>
                <th>BACK</th>
                <th>Delete</th>
              </tr>
             </thead>
              
              <tbody>
                {rows}
              </tbody>
              </table> 
              <input type="text" name = "font" value = {this.state.font} onChange = {this.handleInput} />
              <input type="text" name = "back" value = {this.state.back} onChange = {this.handleInput} />
              <button onClick={this.addToCard}>Add Card</button>
              
              <hr/>
            <button onClick = {this.switchToViewer}>Go To CardViewer</button>
        </div>
      );
    }
  }

  export default CardEditor
  