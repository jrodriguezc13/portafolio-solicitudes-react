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
        maxWidth: 200
    },
    formModal: {
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
    buttonsD: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        justifyContent: 'center',

    },
    subMenu: {
        margin: '14px',
    },
    radioButton: {
        marginLeft: '30px'
    },
    label: {
        color: '#00bcb5',

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#00bcb5',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(5),
    },
    margin: {
        margin: theme.spacing(1.5),
        width: 200,
    },

    button: {
        flex: '0 0 auto',
        display: 'flex',
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


    formControl: {
        margin: theme.spacing(1.5),
        minWidth: 200,
        maxWidth: 200
    },


    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },











}));