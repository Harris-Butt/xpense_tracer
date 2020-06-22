import React, {useContext} from 'react'
import IncomeComponent from './IncomeComponent'
import ExpenseComponent from './ExpenseComponent'
import {Grid} from '@material-ui/core'
import {TransactionsContext} from '../Contexts/TransactionsState'


const IncomeAndExpenseComponent = () => {

    const {transactions} = useContext(TransactionsContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);


    return (
        <>
        <Grid  item xs={6} sm={3} ><IncomeComponent incomeAmount ={income} /></Grid>
        <Grid item  xs={6} sm={3} ><ExpenseComponent expenseAmount = {expense} /></Grid>
        </>
    )
}

export default IncomeAndExpenseComponent