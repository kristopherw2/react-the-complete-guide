import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
    state = {
      validationMessage:"",
    }

    handleInputChange = (event) => {
      const inputValue = event.target.value
      this.setState({validationMessage: inputValue})
    }
    
    deleteCharHandler = (index) => {
      const validationMessage = this.state.validationMessage.split('')
      validationMessage.splice(index, 1)
      const updatedText = validationMessage.join('')
      this.setState({validationMessage: updatedText})
    }

  render() {
    
    let charArray = null;
  
    if(this.state.validationMessage.length > 0){
    charArray = (
      <div>
    {this.state.validationMessage.split('').map((item, index) => {
      return <CharComponent
              character={item}
              key={index}
              click={() => this.deleteCharHandler(index)}/>
      })}
    </div>
    )
}
    return (
      <div className="App">
        <input type="text" 
          placeholder="Kris"
          onChange={this.handleInputChange}
          value={this.state.validationMessage} />
        <p>{this.state.validationMessage}</p>
        <ValidationComponent
        textLength={this.state.validationMessage.length}/>
        {charArray}
      </div>
    );
  }
}

export default App;
