import React from 'react'

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return (
            <input
            style={inputStyle}
            type='text'
            value={props.username}
            onChange={props.changed}/>
    )   
}

export default UserInput