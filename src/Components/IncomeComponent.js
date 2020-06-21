import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 20,
    },
  });


const IncomeComponent = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="C:\Users\workbook\Documents\GitHub\xpense_tracker\public\HeaderImg.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Your Income
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
             $ 0.00
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default IncomeComponent
