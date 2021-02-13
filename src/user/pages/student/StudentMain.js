import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../../shared/Theming/theme';
import { Paper } from '@material-ui/core'
import { getStudentReq, signoutReq } from '../../function/api'
import { getLocalItem } from "../../../shared/functions/storage";
import { isAuth, logOut } from '../../function/authentication';
import { Redirect } from 'react-router-dom';

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
    useEffect(() => {
        async function fetchData() {
            let response;
            try {
                response = await getStudentReq(getLocalItem('id'));
                console.log(response.data)
                const { username, budget } = response.data;
                console.log(username, budget)
                setStudentInfo({ ...studentInfo, id: username, remainedCoins: budget })

            }
            catch (err) {
                console.log(err.response.data)
            }
        }
        fetchData()
    }, [])

    const handleLogOut = async () => {
        let response;
        try {
            response = await signoutReq()
            console.log(response.data)
            logOut()

        }
        catch (err) {
            console.log(err.response.data)
        }

    }
    const DisplayInfo = () => {

        return (
            <Grid container className={classes.root} justify="center">
                <Grid item lg={1}>
                    pic
                </Grid>
                <Grid container item lg={11} justify="center" className={classes.informationPaper}>
                    <Grid item lg={4}>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {`مقطع : ${studentInfo.grade} `}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {`معدل آخرین ترم : ${studentInfo.rencentGrade} `}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {`تعداد مشروطی : ${studentInfo.numberOfMashroot} `}
                        </Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {`  شماره دانشجویی ${studentInfo.id} `}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {` دانشکده : ${studentInfo.college} `}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {` تعداد سکه : ${studentInfo.remainedCoins} `}
                        </Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {` نام و نام خانوادگی :${studentInfo.fullName}`}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {` رشته : ${studentInfo.major} `}
                        </Typography>
                        <Typography variant="body1" align="right" className={classes.typography} color="textPrimary" gutterBottom >
                            {`دوره : ${studentInfo.course} `}
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container item lg={11} justify="flex-end" style={{ paddingTop: '30px' }}>
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
                    <Grid item style={{ textAlign: "center" }} lg={12} >
                        <Button variant="outlined" color="secondary" onClick={handleLogOut}>
                            SignOut
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );

    }

    return (
        <React.Fragment>
            {isAuth() ? DisplayInfo() : <Redirect to="/login"/>}
        </React.Fragment>
    )



};

export default StudentMain;