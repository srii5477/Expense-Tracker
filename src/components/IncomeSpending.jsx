import React from 'react';

const IncomeSpending = (props) => {
    return (
        <div>
            <h3>
                Income: {props.income}
                <br/>
                Expenditure: -{props.expenditure}
            </h3>
        </div>
    )
}

export default IncomeSpending;