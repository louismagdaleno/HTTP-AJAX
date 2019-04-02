import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Friends from './components/Friends/Friends';
import AddFriend from './components/AddFriend/AddFriend';

class App extends Component {
  state = {
    data : [],
    name: '',
    email: '',
    id : 8
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
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
    const newFriend = {'name': this.state.name, 'email': this.state.email};
    axios
    .post(`http://localhost:5000/friends`, newFriend)
    .then(response => {
      console.log(response)
      this.setState({
       postSuccessMessage: response.data.successMessage,
    })})
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <AddFriend addFriend={ this.postFriend} handleClick={this.handleClick} />
        <Friends friends={this.state.data} />
      </div>
    );
  }
}

export default App;
