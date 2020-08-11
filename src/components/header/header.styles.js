import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

    // Alto dinamico para toolbar
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    menu: {
        maxWidth: "15%",
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },


}));