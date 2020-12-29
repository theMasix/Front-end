/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../shared/Theming/theme';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh', 
  },
  logo: {
    maxHeight: '10em',
    marginTop: '3em'
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
    margin: theme.spacing(1),
  },
  buttonsubmit: {
    borderRadius: '50px',
    width: '20rem',
    fontSize: '2rem'
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)

  }

  return (
    <Grid container className={classes.root} justify="center">

      { matchesLG && <Grid container item lg={7} direction="column" justify="center" >       {/* its children is column....this is row!!!!*/}
        <Grid item lg={12}>
          <img
            src={khayam}
            alt="khayam-photo"
            className={classes.khayamPhoto}
          />
        </Grid>
      </Grid>
      }
      <Grid container item lg={5} sm={12} alignItems="center" direction="column"  >    {/* its children is column....this is row!!!!*/}

        <Grid item container lg={5} sm={6} justify="center">
          <Grid item lg={12} sm={12} style={{ textAlign: 'center' }}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item lg={12} sm={12} style={{ textAlign: 'center' }}>
            <Typography variant="h5" style={{ lineHeight: 1 }}>
              سیستم آزمایشی انتخاب واحد
            </Typography>
            <Typography variant="body1">
              مبتنی بر نظریه بازی
            </Typography>
          </Grid>
        </Grid>

        <Grid item container style={{ maxWidth: '20em' }} justify="center" direction="column" >
          <Grid item>
            <TextField label="نام کاربری" id="name" value={userName} onChange={handleUserName} className={classes.field} fullWidth />
          </Grid>
          <Grid item>
            <TextField label="رمز عبور " id="password" value={password} onChange={handlePassword} className={classes.field} fullWidth />
          </Grid>
          <Grid item lg={12} style={{ marginTop: '2em' }}>
            <Button variant="contained" className={classes.buttonsubmit} color="primary" >ورود</Button>
          </Grid>
        </Grid>


      </Grid>

    </Grid>
  );
}