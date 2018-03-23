import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(e){
    this.setState({
      picture: e.target.value
    });
  }

  updateName(e){
    this.setState({
      name: e.target.value
      })
  }

  addFriend(){
    let friend = {
      picture: this.state.picture,
      name: this.state.name,
      
    }
    let newFriends = this.state.friends.slice(0);
    newFriends.push(friend);
    this.setState({
      friends: newFriends,
      name: '',
      picture: '',
    })
  }
  
  render() {

    let friendsArr = this.state.friends.map((e, i) =>{
      return (
        <div key ={i}>
          <img src = {e.picture} alt = 'Profile Pic'/>
          <p>{e.name}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <label>Picture:</label>
        <input type ="text"
              onChange = {(e)=>this.updatePicture(e)}
              value = {this.state.picture}
        />
        <label>Name:</label>
        <input type= "text"
              onChange = {(e) => this.updateName(e)}
              value = {this.state.name}
        />
        <button onClick ={() => this.addFriend()}
        >Add Friend</button>
        {friendsArr}
      </div>
    );
  }
}

export default App;
