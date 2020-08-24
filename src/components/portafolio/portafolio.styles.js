import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

    root: {
        display: "flex",
    },
    content: {
        height: "100vh",
        overflow: "auto",
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "row",
        marginTop: "10px",
    },
    rootPaper: {
        flexGrow: 1,
    },
    table: {
        maxHeight: 440,
        overflow: 'auto',
    },

    cellSmall: {
        minWidth: 100
    },
    tableRow: {
        "&:hover": {
            backgroundColor: "#b3ebe9 !important"
        }
    },
    form: {
        margin: theme.spacing(1),
        minWidth: 140,
    },

    filterTitle: {
        marginBottom: 'unset',
        marginTop: '8px',
        marginLeft: '8px',
        fontWeight: 'bold'

    },
    formColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '6px',

    },
    buttonDate: {
        minWidth: 200,
        justifyContent: 'left',
    },

    inputRoot: {
        margin: '14px',
    },
    buttons: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    subMenu: {
        margin: '14px',
    },
    radioButton: {
        marginLeft: '30px'
    }


}));