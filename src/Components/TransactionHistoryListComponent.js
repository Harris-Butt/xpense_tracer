import React,{useContext} from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'
import {FormattedMessage} from 'react-intl'
import TransactionRowComponent from './TransactionRowComponent'
import {TransactionsContext} from '../Contexts/TransactionsState'

const TransactionHistoryListComponent= () => {
    const {transactions} = useContext(TransactionsContext);
    return (
        <>
        <Paper elevation={3}>
            
            <Typography gutterBottom variant="h5" component="h2">
                <FormattedMessage
                id="app-history"
                defaultMessage="Histroy">
                    Histroy
                </FormattedMessage>
            </Typography>
            
        </Paper>
        <Grid   container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="center">
        
            {transactions.map(transaction=>(<TransactionRowComponent key={transaction.id} transaction={transaction}/>))}
        
        </Grid>
        </>
    )
}

export default TransactionHistoryListComponent