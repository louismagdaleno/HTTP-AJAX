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
    id : 8
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
  render() {
    return (
      <div className="App">
        <AddFriend addFriend={ this.postFriend} handleChange={this.handleChange} handleClick={this.handleClick} />
        <Friends friends={this.state.data} />
      </div>
    );
  }
}

export default App;
