import React from 'react'
import IncomeComponent from './IncomeComponent'
import ExpenseComponent from './ExpenseComponent'
import {Grid, Paper, Typography } from '@material-ui/core'


const TransactionHistroryListComponent= () => {
    return (
        <>
        <Paper elevation={3}>
            <Typography gutterBottom variant="h5" component="h2">Histroy</Typography>
        </Paper>
        </>
    )
}

export default TransactionHistroryListComponent