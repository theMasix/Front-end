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

const useStyles = makeStyles((theme) => ({
  root: {
    fontStyle: 'italic'
  },
  logo: {
    color: 'black',
    height: '100px'
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container xs spacing={2}>
      <Grid container item xs={7} direction="column">
        <Paper style={{ backgroundColor: 'black', height: '100vh', color: 'white' }}>Hello</Paper>
      </Grid>

      <Grid container item xs={5} direction="column" spacing={2}>
          <Grid item xs={4}>
            <img src={logo} className={classes.logo} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant={'h6'}>
              سیستم آزمایشی انتخاب واحد
          </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={'h6'}>
              ورود
          </Typography>
          </Grid>
        </Grid>
    </Grid>
  );
}