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
    }


}));
