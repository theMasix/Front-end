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
    height: '100vh',
  },
  logo: {
    maxHeight: '10em',
    marginTop:'3em'
  },
  khayamPhoto: {
    height: '100%',
    width: "100%",
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
    margin: theme.spacing(4)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <Grid container item lg={7} direction="column" justify="center" >       {/* its children is column....this is row!!!!*/}
        <Grid item lg={12}>
          <img
            src={khayam}
            alt="khayam-photo"
            className={classes.khayamPhoto}
          />
        </Grid>
      </Grid>

      <Grid container item lg={5} alignItems="center" direction="column"  >    {/* its children is column....this is row!!!!*/}

        <Grid item container  lg={5} justify="center">
          <Grid item  lg={12} style={{textAlign:'center'}}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item lg={12} style={{textAlign:'center'}}>
            <Typography variant="h6" style={{ lineHeight: 1 }}>
              سیستم آزمایشی انتخاب واحد
            </Typography>
            <Typography variant="body1">
              مبتنی بر نظریه بازی
            </Typography>
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
}