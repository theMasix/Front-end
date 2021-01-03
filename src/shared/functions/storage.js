const setLocalStroage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}
const getLocalItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}





export { setLocalStroage, removeLocalStorage,getLocalItem }