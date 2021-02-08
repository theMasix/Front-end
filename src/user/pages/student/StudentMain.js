import React, { useState } from 'react';
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
        padding: '2% 10% 0 10%'
    },
    informationPaper: {
        backgroundColor: theme.palette.info.main,
        borderRadius: '10px'
    },
    typography: {
        paddingRight: '5%',
        paddingTop: '5%'
    }
}));

const StudentMain = () => {
    const classes = useStyles()
    const [studentInfo, setStudentInfo] = useState({
        id: '97132546',
        college: "علوم ریاضی",
        remainedCoins: '100',
        fullName: 'حمید رضا گندمی',
        major: 'علوم کامپیوتر',
        course: 'روزانه',
        grade: 'کارشناسی',
        rencentGrade: '18',
        numberOfMashroot: '0'

    })
    return (
        <Grid container className={classes.root} justify="center">
            <Grid item lg={1}>
                pic
            </Grid>
            <Grid container item lg={11} justify="center" className={classes.informationPaper}>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.id} :شماره دانشجویی`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.college} :دانشکده`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.remainedCoins} : تعداد سکه`}
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.fullName} :نام و نام خانوادگی`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.major} :رشته`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.course} : دوره`}
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.grade} :مقطع`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.rencentGrade} :معدل آخرین ترم`}
                    </Typography>
                    <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                        {`${studentInfo.numberOfMashroot} : تعداد مشروطی`}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item lg={11} justify="flex-end" style={{paddingTop:'30px'}}>
                <Grid item lg={3}>
                    <Button variant="contained">
                        برنامه کلاسی
                    </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button variant="contained">
                        دروس ارایه شده
                    </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button variant="contained">
                        انتخاب واحد
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default StudentMain;