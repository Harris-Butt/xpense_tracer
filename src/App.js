import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import HeaderComponent from './Components/HeaderComponent'
import TotalCreditComponent from './Components/TotalCreditComponent'
import IncomeAndExpenseComponent from './Components/IncomeAndExpenseComponent'
import TransactionHistroryListComponent  from './Components/TransactionHistoryListComponent'
import NewTransactionComponent from './Components/NewTransactionComponent'
function App() {
  return (
    <>
      <Grid container direction ="column" spacing={1} align= "center">
        <Grid  item >
          <Grid  xs={0} sm={4}></Grid>
          <Grid  xs={12} sm={4} align="center"><HeaderComponent /></Grid>
          <Grid  xs={0} sm={4}></Grid>
        </Grid>
        <Grid item>
          <Grid  xs={0} sm={4}></Grid>
          <Grid  xs={12} sm={4} align="center"><TotalCreditComponent /></Grid>
          <Grid  xs={0} sm={4}></Grid>
        </Grid>
      </Grid>
      <Grid container direction ="row" >
        <Grid  xs={0} sm={3}></Grid>
          <IncomeAndExpenseComponent/>
        <Grid  xs={0} sm={3}></Grid>
      </Grid>
      <br />
      <Grid container direction="row">
          <Grid  item xs={0} sm={4}></Grid>
          <Grid  item xs={12} sm={4}><TransactionHistroryListComponent /></Grid>
          <Grid  item xs={0} sm={4}></Grid>
      </Grid>
      <br />
      <Grid container direction="row">
          <Grid  item xs={0} sm={4}></Grid>
          <Grid  item xs={12} sm={4}><NewTransactionComponent/></Grid>
          <Grid  item xs={0} sm={4}></Grid>
      </Grid>
    </>
  );
}

export default App;
