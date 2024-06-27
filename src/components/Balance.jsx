import React from 'react';

const Balance = (props) => {
    return (
        <>
        <h3>Your current balance is: </h3>
        <h3> {props.amt} </h3>
        </>
    )
}

export default Balance;