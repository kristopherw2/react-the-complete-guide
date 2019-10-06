import React from 'react';


const UserOutput = (props) => {
    console.log(props)
    return (
        <div>
            <p>This shouldn't change</p>
            <p>My Name is {props.username}</p>
        </div>
        )
}

export default UserOutput