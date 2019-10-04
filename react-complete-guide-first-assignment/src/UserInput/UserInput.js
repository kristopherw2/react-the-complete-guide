import React from 'react'

const UserInput = (props) => {
    return (
        <div>
            <input type='text' value={props.username} onChange={props.changed}/>
        </div>
    )   
}

export default UserInput