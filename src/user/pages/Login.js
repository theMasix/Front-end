/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/دانشکده علوم ریاضی.png'
import khayam from '../../assets/khayam-j.jpg'
import { } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  logo: {
    color: '#212121'
    ,
    width: '120px',
    margin: '10px'
  },
  khayamPhoto: {
    width: '100%',
    height: '100%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  mainPaper: {
    width: '90%',
    height: '90%',
    margin: 'auto',
  },
  field: {
    margin:theme.spacing(4)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container item sm={7}  >       {/* its children is column....this is row!!!!*/}
        <Grid item sm={12}>
          <img
            src={khayam}
            alt="khayam-photo"
            className={classes.khayamPhoto}
          />
        </Grid>
      </Grid>

      <Grid container item sm={5} justify="center" >    {/* its children is column....this is row!!!!*/}
        <Grid item container sm direction="column">

          <Grid item sm={4}>
            <Grid container item sm={12} justify="center"  >
              <Grid item sm={12} style={{ textAlign: 'center' }}>
                <img src={logo} className={classes.logo} alt="logo" />
              </Grid>
              <Grid item sm={12} style={{ textAlign: 'center' }} >
                <Typography variant={'h6'}>
                  سیستم آزمایشی انتخاب واحد
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={8}>
            <Grid container item sm={12} justify="center">
              <form noValidate autoComplete="off">
                <Grid item sm={12}>
                  <TextField id="standard-basic" label="Standard" className={classes.field}/>
                </Grid>
                <Grid item sm={12}>
                  <TextField id="standard-basic" label="Standard" className={classes.field} />
                </Grid>
                <Grid item sm={12}>
                  <TextField id="standard-basic" label="Standard" className={classes.field} />
                </Grid>
              </form>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
}