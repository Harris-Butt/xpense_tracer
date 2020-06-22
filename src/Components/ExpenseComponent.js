import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {FormattedMessage} from 'react-intl'

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 20,
    },
    minus:{
      background: "#FFCCCB"
    }
  });


const ExpenseComponent = ({expenseAmount}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <FormattedMessage
              id="app-expense"
              defaultMessage= "Your Expense"
              >
              Your Expense
             </FormattedMessage>
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.minus}>
            <FormattedMessage id="app-currency" defaultMessage="Rs">
                Rs 
            </FormattedMessage>
            &nbsp;
              {expenseAmount}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default ExpenseComponent