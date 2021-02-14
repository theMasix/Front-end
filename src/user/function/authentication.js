import {
  setLocalStroage,
  getLocalItem,
  removeLocalStorage,
} from "../../shared/functions/storage";

const authenticateUser = (userInfo) => {
  let { name, username, token, budget } = userInfo; //change this later
  setLocalStroage("name", name);
  setLocalStroage("id", username);
  setLocalStroage("token", token);
  setLocalStroage("bg", budget);
};
const isAuth = () => {
  if (window !== undefined) {
    if (localStorage.getItem("token")) {
      return getLocalItem("token");
    } else {
      return false;
    }
  }
};
const logOut = () => {
  removeLocalStorage("id");
  removeLocalStorage("token");
  removeLocalStorage("bg");
  removeLocalStorage("name");
};

export { authenticateUser, isAuth, logOut };
