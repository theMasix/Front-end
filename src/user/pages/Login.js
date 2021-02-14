/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/دانشکده علوم ریاضی.png";
import khayam from "../../assets/khayam-j.jpg";
import {} from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../../shared/Theming/theme";
import { signInReq, signoutReq } from "../function/api";
import { authenticateUser, isAuth } from "../function/authentication";
import { Paper } from "@material-ui/core";
import { getLocalItem } from "../../shared/functions/storage";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  logo: {
    maxHeight: "10em",
    marginTop: "3em",
  },
  khayamPhoto: {
    height: "100%",
    width: "100%",
    margin: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainPaper: {
    width: "90%",
    height: "90%",
    margin: "auto",
  },
  field: {
    margin: theme.spacing(1),
  },
  buttonsubmit: {
    borderRadius: "50px",
    width: "20rem",
    fontSize: "2rem",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [userName, setUserName] = useState("9812223238");
  const [password, setPassword] = useState("123");
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const history = useHistory();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    let response;
    try {
      response = await signInReq(userName, password);
      console.log(response.data);
      let userInfo = response.data;
      authenticateUser(userInfo);

      // if the user is authenticated now, redirect the user regardless of where the user comes from
      history.replace("/student");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // when the user is already authenticated
  if (isAuth()) return <Redirect to="/student" />;

  return (
    <React.Fragment>
      <Grid container className={classes.root} justify="center">
        {matchesLG && (
          <Grid container item lg={7} direction="column" justify="center">
            {" "}
            {/* its children is column....this is row!!!!*/}
            <Grid item lg={12}>
              <img
                src={khayam}
                alt="khayam-photo"
                className={classes.khayamPhoto}
              />
            </Grid>
          </Grid>
        )}
        <Grid
          container
          item
          lg={5}
          sm={12}
          alignItems="center"
          direction="column"
        >
          {/* its children is column....this is row!!!!*/}
          <Grid item container lg={5} sm={6} justify="center">
            <Grid item lg={12} sm={12} style={{ textAlign: "center" }}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
            <Grid item lg={12} sm={12} style={{ textAlign: "center" }}>
              <Typography variant="h5" style={{ lineHeight: 1 }}>
                سیستم آزمایشی انتخاب واحد
              </Typography>
              <Typography variant="body1">مبتنی بر نظریه بازی ّ </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ maxWidth: "20em" }}
            justify="center"
            direction="column"
          >
            <Grid item>
              <TextField
                label="نام کاربری"
                id="name"
                value={userName}
                onChange={handleUserName}
                className={classes.field}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="رمز عبور "
                id="password"
                value={password}
                onChange={handlePassword}
                className={classes.field}
                fullWidth
              />
            </Grid>
            <Grid item lg={12} style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.buttonsubmit}
                color="primary"
                onClick={handleSubmit}
              >
                ورود
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
