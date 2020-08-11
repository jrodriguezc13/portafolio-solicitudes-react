import React, {Component} from "react";
// Themes
import './assets/css/Home.css';
import {customTheme} from "./Theme";
// React Material-UI
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import {MuiThemeProvider} from '@material-ui/core';


// Icons
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

// Components
import ClientComponent from "./Clientes";
import StatusComponent from "./Status";
import PortafolioComponent from "./Portafolio";
import RequestTypeComponent from "./RequestType";
import ComercialAComponent from "./ComercialAreas";
import TechnicalAComponent from "./TechnicalArea";
import AsignarComponent from "./Asignar";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    toolbarMargin: theme.mixins.toolbar,
    menu: {
       marginTop:'35px',
    },

});


const Home= withStyles(styles)  (
    class extends Component {
        static defaultProps = {
            MenuItems: ({closeMenu}) => (
                <div>

                   <p className="titulop">Usuario</p>
                    <Divider/>
                    <MenuItem onClick={closeMenu}>
                        <PersonOutlinedIcon/> <span className="spacer"></span>
                        Perfil
                    </MenuItem>
                    <Divider/>

                    <MenuItem onClick={closeMenu}>
                        <PowerSettingsNewIcon/> <span className="spacer"></span>
                        Cerrar sesión
                    </MenuItem>

                </div>
            ),
            MenuItems2: ({closeMenu}) => (
              <div>
                  <p className="titulop">Mantenimiento</p>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/">Portafolio</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/client">Clientes</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/coa">Área comercial</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/status">Estado de solicitud</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/reqtyp">Tipo de solicitud</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/tea">Área técnica</MenuItem>
                  <Divider/>
                  <MenuItem onClick={closeMenu} component={Link} to="/asign">Asignar cliente</MenuItem>

                </div>
            ),


        };
        state = {anchor:null, anchor2: null};
        closeMenu = () => this.setState({anchor: null, anchor2: null});

    render(){
        const {classes, MenuItems, MenuItems2} = this.props;

        return (
            <div>
              <MuiThemeProvider theme={customTheme}>
                <AppBar position="fixed" elevation={0} style={{background: "#f7f7f7"}}>
                    <Toolbar className="toolbar">
                         <img src={require("./img/logo.png")} alt="Logo Intelix" className="img"/>

                            <span className={classes.flex}></span>

                            <Tooltip title="Cuenta">
                              <IconButton  color="primary" onClick={e=> this.setState(({anchor: e.currentTarget}))} aria-label="cuenta" edge="end">
                                <PersonIcon/>
                              </IconButton>
                            </Tooltip>

                            <Menu className={classes.menu} anchorEl={this.state.anchor} open={Boolean(this.state.anchor)}
                                  onClose={this.closeMenu}>
                                <MenuItems closeMenu={this.closeMenu} />
                            </Menu>

                            <Tooltip title="Manteniminto">
                              <IconButton  color="primary"  onClick={e=> this.setState(({anchor2: e.currentTarget}))}  edge="end">
                                <SettingsIcon/>
                              </IconButton>
                            </Tooltip>
                            <Menu className={classes.menu} anchorEl={this.state.anchor2} open={Boolean(this.state.anchor2)}
                                 aria-label="Mantenimiento" onClose={this.closeMenu}>
                                <MenuItems2 closeMenu={this.closeMenu} />
                            </Menu>

                    </Toolbar>
                </AppBar>

                <div className={classes.toolbarMargin}/>
              </MuiThemeProvider>
            </div>

        )
    }
  }
);

const HomeComponent = withStyles(styles) (({classes}) => (
    <div className={classes.root}>
        <Router>
            <Route
                exact
                path="/"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <PortafolioComponent/>
                        </div>
                    </div>
                )}
            />
            <Route
                exact
                path="/client"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <ClientComponent/>
                        </div>
                    </div>
                )}
            />

            <Route
                exact
                path="/coa"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <ComercialAComponent/>
                        </div>
                    </div>
                )}
            />

            <Route
                exact
                path="/status"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <StatusComponent/>
                        </div>
                    </div>
                )}
            />

            <Route
                exact
                path="/reqtyp"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <RequestTypeComponent/>
                        </div>
                    </div>
                )}
            />

            <Route
                exact
                path="/tea"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <TechnicalAComponent/>
                        </div>
                    </div>
                )}
            />

            <Route
                exact
                path="/asign"
                render={() => (
                    <div>
                        <Home/>
                        <div>
                            <AsignarComponent/>
                        </div>
                    </div>
                )}
            />

        </Router>

    </div>

));

export default HomeComponent;
