import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Friends from './components/Friends/Friends';
import AddFriend from './components/AddFriend/AddFriend';

const URL = "http://localhost:5000/friends";

class App extends Component {
  state = {
    data : [],
    name: '',
    email: '',
    age : 0,
    id : 8,
    updateID: 0,
    update: false
  }
  componentDidMount(){
    axios.get(URL)
      .then(response => this.setState({
        data: response.data
      }))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
        [event.target.name] : event.target.value
    });
}
  handleClick = event => {
    event.preventDefault();
  }
  postFriend = event => {
    event.preventDefault();
    const friend = {name: this.state.name, email: this.state.email, age: this.state.age};
    axios
    .post(URL, friend )
    .then((res) => {
      this.setState({data: res.data, name: " ", age: " ", email: " "});
    })
    .catch((err) => console.log(err));

};

handleFriendUpdate = (  id, event) => {
  
  

  this.setState(prevState => ({
    updateID : id,
    update : true
  }))


}
deleteFriend = friend => {

  axios
    .delete(URL+`/${friend.id}`)
    .then(resp => this.setState({ friends: resp.data }))
    .catch(console.log);


    axios.get(URL)
  .then(response => this.setState({
    data: response.data
  }))
  .catch(err => console.log(err));
};

updateFriend = event  => {
  event.preventDefault();
  const friend = {name: this.state.name, age : this.state.age, email : this.state.email, id : this.state.updateID};
  axios
  .put(`http://localhost:5000/friends/${this.state.updateID}`, friend)
  .then(response => this.setState({
    data: response.data
  }))
  .catch(console.log);


 
}
  render() {
    return (
      <div className="App">
        <AddFriend updateIndex={this.state.updateIndex} update={this.state.update} updateFriend={this.updateFriend} addFriend={ this.postFriend} handleChange={this.handleChange} handleClick={this.handleClick} />
        <Friends friends={this.state.data} deleteFriend={this.deleteFriend} handleFriendUpdate={this.handleFriendUpdate} />
      </div>
    );
  }
}

export default App;
