import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

    root: {
        display: "flex",
    },

    labelRoot: {
        fontSize: 14,
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
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(5),
    },

    margin: {
        margin: theme.spacing(1),
        width: 200,
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

    },
    dialog: {
        margin: 0,
        padding: theme.spacing(2),
    },
   
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
         },
}));
