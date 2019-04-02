import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Friends from './components/Friends/Friends';
import AddFriend from './components/AddFriend/AddFriend';

class App extends Component {
  state = {
    data : []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({
        data: response.data
      }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <AddFriend />
        <Friends friends={this.state.data} />
      </div>
    );
  }
}

export default App;
