import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTransactListContext } from '../context/TransactProvider';

const ChatWithAI = () => {
    const [ data, setData ] = useState("");
    const { transactions } = useTransactListContext();
    const [ changes, setChanges ] = useState("");
    const [ sources, setSources ] = useState("");
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
            console.log(response.data.data);
            const submission = response.data.data;
            // let stringified = JSON.stringify(submission);
            // stringified.replace(/\//g, '');
            // setData(stringified.substring(1, stringified.length-1));
            console.log(typeof(submission));
            if(typeof(submission) === 'string') {
                setData(submission);
                setChanges("");
                setSources("");
            }
            else {
                setChanges(JSON.stringify(submission.changes));
                setSources(JSON.stringify(submission.sources));
                setData("");
            }
            
            
            
         }).catch((err) => {
             setData("Looks like the request limit has been reached for your account. Contact me at sridevishankar1161@gmail.com to recharge.");
         });
    }

    return (
        <div className="chat">
            <form onSubmit={Submit}>
                <h3> Do you wish to get more insights from your daily expenses with the help of a personalized report from the latest AI models? </h3>
                <input type="hidden" value={JSON.stringify(transactions)} />
                <button type="submit" className="btn btn-outline-light">Let me see it!</button>
                <h4> The model says: </h4>
                <h5>{changes && changes.replace(/\//g, '').substring(1, changes.length-1)}</h5>
                <h5>{sources && sources.replace(/\//g, '').substring(1, sources.length-1)}</h5>
                <h5>{data.substring(1, data.length - 1)}</h5>
                <h5> Please hit the button again if the answer is not satisfactory. </h5>
            </form>
        </div>
    )
}

export default ChatWithAI;