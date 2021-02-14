import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  courseId,
  courseName,
  instruterName,
  unit,
  groupNo,
  moreInfo
) {
  return { courseId, courseName, instruterName, unit, groupNo, moreInfo };
}

export default function SemestersCourses() {
  const classes = useStyles();
  const [course, setCourse] = useState([
    {
      courseId: "321684",
      courseName: "مبانی کامپیوتر و برنامه سازی",
      instruterName: "دکتر رمضانیان",
      unit: "3",
      groupNo: "1",
    },
    {
      courseId: "321685",
      courseName: "پیشرفته",
      instruterName: "دکتر رمضانیان",
      unit: "3",
      groupNo: "1",
    },
  ]);

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">اطلاعات</TableCell>
              <TableCell align="right">واحد</TableCell>
              <TableCell align="right">نام استاد</TableCell>
              <TableCell align="right">نام درس</TableCell>
              <TableCell align="right">گروه</TableCell>
              <TableCell align="right">شماره درس</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course.map((element) => (
              <TableRow key={element.courseId}>
                <TableCell component="th" scope="row">
                  {"بعدا"}
                </TableCell>
                <TableCell align="right">{element.unit}</TableCell>
                <TableCell align="right">{element.instruterName}</TableCell>
                <TableCell align="right">{element.courseName}</TableCell>
                <TableCell align="right">{element.groupNo}</TableCell>
                <TableCell align="right">{element.courseId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
