import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/GameLabJpeg.jpeg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: '100px auto'
  },
  media: {
    height: 240,
  },
});

const Preview = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ferdowsi University Game laboratory
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <br />
            v1.0 Preview of HomePage
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/login">Login</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Preview;