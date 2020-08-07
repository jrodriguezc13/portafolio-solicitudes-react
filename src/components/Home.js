import React from "react";

import { withStyles } from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// Icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SetingsIcon from '@material-ui/icons/Settings';

// Components
import ClientComponent from "./Clientes";
import StatusComponent from "./Status";
import PortafolioComponent from "./Portafolio";
import RequestTypeComponent from "./RequestType";
import ComercialAComponent from "./ComercialAreas";
import TechnicalAComponent from "./TechnicalArea";


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit *3,
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    mantenimiento: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',}
    },
    grow: {
        flexGrow: 1,
    },

});


class HomeComponent extends React.Component {


    render(){
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static" elevation={0}>
                    <Toolbar>
                        <img src="src/components/img/logo.png" alt="Logo Intelix" />
                        <IconButton  color="contrast" ><MenuIcon/></IconButton>
                        <Typography  type="title" color="inherit">
                            Portafolio de Solicitudes
                        </Typography>
                        <div>
                            <IconButton color="contrast" onClick={this.props.login} position="right">
                                <AccountCircle/>
                            </IconButton>
                            <IconButton color="contrast" edge="end">
                                <SetingsIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <h1>Page Component</h1>
               
                <img src="src/components/img/logo.png" alt="Logo Intelix" />
                <div>
                <ClientComponent/>
                <ComercialAComponent/>
                <RequestTypeComponent/>
                <StatusComponent/>
                </div>
            </div>

        )
    }
}

export default HomeComponent
