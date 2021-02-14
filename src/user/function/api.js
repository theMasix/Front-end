import axios from "axios";
import { setLocalStroage, getLocalItem } from "../../shared/functions/storage";

const signInReq = async (userName, password) => {
  return await axios({
    method: "POST",
    url: "http://api.fumcbm.tk/v1/token-auth-login/",

    data: {
      username: `${userName}`,
      password: `${password}`,
    },
  });
};
const signoutReq = async () => {
  return await axios({
    method: "get",
    url: "http://api.fumcbm.tk/v1/token-auth-logout/",
    headers: {
      Authorization: `Token ${getLocalItem("token")}`,
    },
  });
};
const getStudentReq = async (studentId) => {
  return await axios({
    method: "get",
    url: `http://api.fumcbm.tk/v1/student/${studentId ? studentId : ""}/`,
    headers: {
      Authorization: `Token ${getLocalItem("token")}`,
    },
  });
};

export { signInReq, signoutReq, getStudentReq };
