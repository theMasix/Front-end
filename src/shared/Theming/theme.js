import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: blue[500],
                fontSize: "1.25rem"
            }
        },

    }

})
export default theme