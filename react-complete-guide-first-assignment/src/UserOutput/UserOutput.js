import React from 'react';


const UserOutput = (props) => {
    console.log(props)
    return (
        <div>
            <p>My Name is {props.username}</p>
        </div>
        )
}

export default UserOutput