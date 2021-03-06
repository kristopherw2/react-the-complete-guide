import React, { useState, Component }  from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {  
    persons: [
      {name: 'Kris', age: 34},
      {name: 'Carl', age: 26},
      {name: 'Juan', age: 32},
    ],
    otherState: 'some value',
    showPersons: false,
  }



switchNameHandler = (newName) => {
  // console.log('Was Clicked!');
  // DON'T DO THISthis.state.persons[0].name = 'Kristopher'
  this.setState ({
    persons: [
    {name: newName, age: 34},
    {name: 'Carl', age: 27},
    {name: 'Juan', age: 33},
    ]
  })
}

nameChangeHandler = (event) => {
    this.setState({
    persons: [
      {name: 'Kris', age: 34},
      {name: event.target.value, age: 27},
      {name: 'Juan', age: 37},
      ]
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kristopher!!')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={style}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
}



export default App;