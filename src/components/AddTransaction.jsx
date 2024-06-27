import React, { useState } from 'react';
import { useTransactListContext } from '../context/TransactProvider';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amt, setAmt] = useState(0);
    const { transactions, addExpense, delExpense } = useTransactListContext();
    function Submit (e) {
        e.preventDefault();
        addExpense({ id: transactions.length + 1, text, amt});
    }
    return (
        <>
            <h3>Add Transaction(s)</h3>
            <form onSubmit={Submit}>
                <div className="htmlForm-control">
                    <label htmlFor="text"><h5>Description</h5></label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} name="text" placeholder="Enter a description..." />
                </div>
                <div className="htmlForm-control">
                    <label htmlFor="amount"><h5>Amount</h5></label>
                    <input type="number" name="amount" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn btn-outline-light btn-lg">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;