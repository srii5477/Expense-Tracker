import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTransactListContext } from '../context/TransactProvider';

const ChatWithAI = () => {
    const [ data, setData ] = useState("Initializing...");
    const { transactions } = useTransactListContext();
    // useEffect(() => {
    //     axios.post("https://localhost:3000/invoke", { transactions }).then((response) => {
    //         setData(response.data);
    //     }).catch((err) => {
    //         console.error(err);
    //     });
    // }, []);
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/invoke", { transactions }).then((response) => {
            setData(response.data);
         }).catch((err) => {
             console.error(err);
         });
    }

    return (
        <div className="chat">
            <form onSubmit={Submit}>
                <h3> Do you wish to get more insights from your daily expenses with the help of a personalized report from the latest AI models? </h3>
                <h5> {data} </h5>
                <button type="submit" className="btn btn-outline-light">Let me see it!</button>
            </form>
        </div>
    )
}

export default ChatWithAI;