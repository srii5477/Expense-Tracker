import React from 'react';

const IncomeSpending = (props) => {
    return (
        <div>
            <h4>
                Income: {props.income}
                <br/>
                Expenditure: -{props.expenditure}
            </h4>
        </div>
    )
}

export default IncomeSpending;