import React from 'react';

const AddFriend = props => {

   
        return (
            <form onSubmit={props.postFriend}>
                <input name="name" placeholder="name" onChange={props.handleChange} value={props.name} />
                <input name="email" placeholder="email" onChange={props.handleChange} value={props.email} />
                <input name="age" placeholder="age" onChange={props.handleChange} value={props.age} />
                <button type="submit" value="Submit" onClick={props.postFriend}>Add Friend</button>
            </form>
        );
    
}

export default AddFriend;