import React from 'react';

const Friend = props => {
    return (
        <div className="friend">
        <button onClick={() => props.handleFriendUpdate(props.friend.id)}>Update</button>
        <button onClick={() => props.deleteFriend(props.friend)}>Delete</button>
        <h2>{props.friend.name}</h2>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
        </div>

    );
}

export default Friend;