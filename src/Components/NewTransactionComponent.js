import React,{useState,useContext} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core'
import {FormattedMessage} from 'react-intl'
import {TransactionsContext} from '../Contexts/TransactionsState'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const  NewTransactionComponent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);  
  const { addTransaction } = useContext(TransactionsContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  const classes = useStyles();
  return (
      <>
      <Paper>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          <FormattedMessage 
          id = "app-add-new-transaction-header"
          defaultMessage="Add new Transaction">
            Add new Transaction
          </FormattedMessage>
        </Typography>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            id="description" 
            label=
            {<FormattedMessage id="app-add-new-transaction-description" defaultMessage="Description">"gescription"<br/>(negative - expense, positive - income)</FormattedMessage>}
            name="escription"
            autoComplete="description"
            autoFocus
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label=
            {<FormattedMessage id="app-add-new-transaction-amount" defaultMessage="amount">"Amount"</FormattedMessage>}
            
            type="number"
            id="amount"
            autoComplete="amount"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography gutterBottom variant="h5" component="h5">
              <FormattedMessage id="app-add-new-transaction-button" FormattedMessage="Add new Transaction" >
              Add new Transaction
              </FormattedMessage>
            </Typography>
          </Button>

        </form>


    </Container>
    </Paper>
    </>

  )
}
export default NewTransactionComponent;