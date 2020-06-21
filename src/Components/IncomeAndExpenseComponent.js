import React from 'react'
import IncomeComponent from './IncomeComponent'
import ExpenseComponent from './ExpenseComponent'
import {Grid} from '@material-ui/core'


const IncomeAndExpenseComponent = () => {
    return (
        <>
        <Grid  xs={6} sm={3} ><IncomeComponent /></Grid>
        <Grid  xs={6} sm={3} ><ExpenseComponent /></Grid>
        </>
    )
}

export default IncomeAndExpenseComponent
