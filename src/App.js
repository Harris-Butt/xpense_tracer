import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import HeaderComponent from './Components/HeaderComponent'
import TotalCreditComponent from './Components/TotalCreditComponent'
import IncomeAndExpenseComponent from './Components/IncomeAndExpenseComponent'
import TransactionHistroryListComponent  from './Components/TransactionHistoryListComponent'
import NewTransactionComponent from './Components/NewTransactionComponent'
import {useContext} from 'react';
import {Context} from './Components/Wrapper';
import {TransactionsProvider} from './Contexts/TransactionsState';
import {FormattedMessage} from 'react-intl'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const context = useContext(Context);
  const classes = useStyles();
  return ( 
  <TransactionsProvider>
    <Grid container direction ="column" spacing={1} align= "center">
      <Grid item>
    <FormControl className={classes.formControl}>
        <InputLabel id="language-select-label">
        <FormattedMessage
              id="app-language"
              defaultMessage= "Language"
        >
          Language
        </FormattedMessage>

        </InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={context.locale}
          onChange= {context.selectLang}
        >
          <MenuItem value="ur-Pk">اردو</MenuItem>
          <MenuItem value="en-Us">English</MenuItem>
         
        </Select>
      </FormControl>
      </Grid>
      <Grid  item >
        <Grid  item xs={0} sm={4}></Grid>
        <Grid  item xs={12} sm={4} align="center"><HeaderComponent /></Grid>
        <Grid  item xs={0} sm={4}></Grid>
      </Grid>
      <Grid item>
        <Grid  item xs={0} sm={4}></Grid>
        <Grid  item xs={12} sm={4} align="center"><TotalCreditComponent /></Grid>
        <Grid  item xs={0} sm={4}></Grid>
      </Grid>
    </Grid>
    <br/>
    <Grid container direction ="row" >
      <Grid  item xs={0} sm={3}></Grid>
        <IncomeAndExpenseComponent/>
      <Grid item xs={0} sm={3}></Grid>
    </Grid>
    <br />
    <Grid container direction="row">
        <Grid  item xs={0} sm={4}></Grid>
        <Grid  item xs={12} sm={4} align="center"><TransactionHistroryListComponent /></Grid>
        <Grid  item xs={0} sm={4}></Grid>
    </Grid>
    <br />
    <Grid container direction="row">
        <Grid  item xs={0} sm={4}></Grid>
        <Grid  item xs={12} sm={4} ><NewTransactionComponent/></Grid>
        <Grid  item xs={0} sm={4}></Grid>
    </Grid>
  </TransactionsProvider>
);
}
export default App