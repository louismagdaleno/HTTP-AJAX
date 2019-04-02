import React, { Component } from 'react';

class AddFriend extends Component {

    state = {
        name : '',
        id : 8,
        email: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render(){
        return (
            <form>
                <input name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} />
                <input name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
                <button type="submit" value="Submit" >Add Friend</button>
            </form>
        );
    }
}

export default AddFriend;