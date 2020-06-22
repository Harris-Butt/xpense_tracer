import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {FormattedMessage} from 'react-intl'
import { TransactionsContext }  from '../Contexts/TransactionsState'



const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 20,
    },
  });

const TotalCreditComponent = () => {
    const classes = useStyles();
    const {transactions} = useContext(TransactionsContext)
    const amounts  = transactions.map(transaction=>transaction.amount);
    const totalCredit = amounts.reduce((acc,item)=>(acc+item),0).toFixed(2);
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
            <FormattedMessage
              id="app-balance"
              defaultMessage="Total Balance">
             Total Balance
             </FormattedMessage>
            </Typography>
            <Typography gutterBottom variant="h3" component="h3">
              <FormattedMessage id="app-currency" defaultMessage="Rs">
                Rs
              </FormattedMessage>
              &nbsp;
              {totalCredit}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default TotalCreditComponent