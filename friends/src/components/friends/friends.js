import React from 'react';
import Friend from '../friend/friend';

const Friends = props => {
    return (
        <div className="friends">
           {props.friends.map(friend => <Friend friend={friend}/>)}
        </div>
    );
}

export default Friends;