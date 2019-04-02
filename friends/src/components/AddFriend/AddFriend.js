import React from 'react';

const AddFriend = props => {

   
        return (
            <form onSubmit={props.postFriend}>
                <input name="name" placeholder="name" onChange={props.handleChange} value={props.name} />
                <input name="email" placeholder="email" onChange={props.handleChange} value={props.email} />
                <button type="submit" value="Submit" onClick={props.handleClick}>Add Friend</button>
            </form>
        );
    
}

export default AddFriend;