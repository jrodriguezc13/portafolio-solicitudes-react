import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#00bcb5',
            contrastText: '#fff'
        },
    },
});
export default theme;