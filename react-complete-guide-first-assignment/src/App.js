import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
    state={
      userName: 'Kristopher'
    }

    usernameChangeHandler = (event) =>{
      this.setState({
        userName: event.target.value
      })
    }
  render() {
  return (
    <div className="App">
      <UserOutput 
      username={this.state.userName}/>
      <UserInput
      changed={this.usernameChangeHandler}
      username={this.state.userName} />
    </div>
  );
  }
}

export default App;
