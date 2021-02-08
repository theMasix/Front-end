import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../../shared/Theming/theme';
import { Paper } from '@material-ui/core'


//home/login/student
//public info
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        padding: '2% 10% 0 10%'
    },
    informationPaper: {
        backgroundColor: theme.palette.info.main,
        borderRadius:'10px'
    },
    typography: {
        paddingRight: '5%',
        paddingTop: '5%'
    }
}));

const StudentMain = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} justify="center">
            <Grid c item lg={1}>
                pic
            </Grid>
            <Grid container item lg={11} justify="center" className={classes.informationPaper}>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        شماره دانشجویی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        دانشکده علوم ریاضی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        تعداد شکه شما
                        </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        شماره دانشجویی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        دانشکده علوم ریاضی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        تعداد شکه شما
                        </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        شماره دانشجویی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        دانشکده علوم ریاضی
                        </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        تعداد شکه شما
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default StudentMain;