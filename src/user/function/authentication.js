import { setLocalStroage, getLocalItem } from '../../shared/functions/storage'


const authenticateUser = (fullName, studentId, token) => {
    setLocalStroage('name', fullName)
    setLocalStroage('id', studentId)
    setLocalStroage('token', token)
}
const isAuth = () => {
    if (window !== undefined) {
        if (localStorage.getItem('token')) {
            return getLocalItem('token')
        }
        else {
            return false
        }

    }
}

export { authenticateUser, isAuth }
