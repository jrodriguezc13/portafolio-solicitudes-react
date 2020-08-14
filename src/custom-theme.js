import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Intelix turquoise and text white
            main: '#00bcb5',
            contrastText: '#fff'
        },
    },
});
export default theme;