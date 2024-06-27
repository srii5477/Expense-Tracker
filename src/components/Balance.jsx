import React from 'react';

const Balance = (props) => {
    return (
        <>
        <h2>Your current balance is: </h2>
        <h3> {props.amt} </h3>
        </>
    )
}

export default Balance;