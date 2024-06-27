import React, { useState } from 'react';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amt, setAmt] = useState(0);
    return (
        <>
            <h3>Add a Transaction(s)</h3>
            <form>
                <div className="htmlForm-control">
                    <label htmlFor="text"><h4>Text </h4></label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} name="text" placeholder="Enter text..." />
                </div>
                <div className="htmlForm-control">
                    <label htmlFor="amount"><h5>Amount </h5></label>
                    <input type="number" name="amount" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn btn-outline-light btn-lg">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;