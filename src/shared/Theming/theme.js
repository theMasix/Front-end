import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary:blue,
        secondary: {
            main:red[500]
        }
    }

})
export default theme