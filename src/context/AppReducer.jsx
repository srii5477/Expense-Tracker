export default (state, action) => {
    switch(action.type) {
        case 'DEL':
            return {
                ...state,
                transactions: state.transactions.filter(transact => transact.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}