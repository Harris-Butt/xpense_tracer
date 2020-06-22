import { makeStyles } from '@material-ui/core/styles';
import React,{useContext} from 'react'
import { TransactionsContext } from '../Contexts/TransactionsState';
import {Grid, Paper, Typography,Button } from '@material-ui/core'
import {FormattedMessage} from 'react-intl'

const useStyles = makeStyles({
    minus: {
        background: "#FFCCCB"
    },
    plus:{
        background:"green"
    },

  });

const TransactionRowComponent = ({transaction}) => {
    const classes = useStyles();
    const amountSign = transaction.amount >= 0 ? '+' : '-';
    const { deleteTransaction } = useContext(TransactionsContext);
    return (
       
        <Grid item>
            <Paper className={transaction.amount >= 0 ? classes.plus:classes.minus}>
            <Typography gutterBottom variant="h5" component="h2">
           {transaction.text} &nbsp; &nbsp; <span>{amountSign}
           
           <FormattedMessage id="app-currency" defaultMessage="Rs">
                Rs
            </FormattedMessage>
           {Math.abs(transaction.amount)} </span><Button variant="contained" color="primary" onClick={() => deleteTransaction(transaction.id)}>X</Button>
           </Typography>
           </Paper>
       
       </Grid>
       
    )
}

export default TransactionRowComponent
