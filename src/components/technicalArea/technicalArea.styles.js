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
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(5),
    },
    margin: {
        margin: theme.spacing(1),
    },
    buttons: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        justifyContent: 'center',

    },
    span: {
        color: '#dc3545!important',
        marginBottom: '0.5 rem!important',
        display: 'block!important',
        fontWeight: 'bold',
        fontSize: '10px',

    }

}));
