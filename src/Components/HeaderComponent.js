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
  });

const HeaderComponent = () => {
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
                    id="app-header"
                    defaultMessage="Expense Tracker"
                >
              Expense Tracker
              </FormattedMessage>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default HeaderComponent