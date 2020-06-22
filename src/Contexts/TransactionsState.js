import React,{ createContext,useReducer} from 'react'
import  AppReducer from './AppReducer'
const initialState = {
    transactions:[
         ]
        
}
export const TransactionsContext = createContext(initialState)

export const TransactionsProvider = ({children}) => {
    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
    
      function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    const[state,dispatch] =useReducer(AppReducer,initialState)
    return (
        <TransactionsContext.Provider value={{transactions: state.transactions,addTransaction,deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default  TransactionsProvider 
