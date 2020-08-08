import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
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
import SettingsIcon from '@material-ui/icons/Settings';

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
    menuButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px'
    },
    toolbarMargin: theme.mixins.toolbar,
    menu: {
       marginTop:'35px',
    }

});


const Home= withStyles(styles)  (
    class extends Component {
        static defaultProps = {
            MenuItems: ({closeMenu}) => (
                <div>
                    <MenuItem onClick={closeMenu}>Usuario</MenuItem>
                    <MenuItem onClick={closeMenu}>Perfil</MenuItem>
                    <MenuItem onClick={closeMenu}>Cerrar sesión</MenuItem>
                </div>
            ),
            MenuItems2: ({closeMenu}) => (
              <div>

                  <MenuItem onClick={closeMenu} component={Link} to="/">Portafolio</MenuItem>
                  <MenuItem onClick={closeMenu} component={Link} to="/client">Clientes</MenuItem>
                  <MenuItem onClick={closeMenu} component={Link} to="/coa">Área comercial</MenuItem>
                  <MenuItem onClick={closeMenu} component={Link} to="/status">Estado de solicitud</MenuItem>
                  <MenuItem onClick={closeMenu} component={Link} to="/reqtyp">Tipo de solicitud</MenuItem>
                  <MenuItem onClick={closeMenu} component={Link} to="/tea">Área técnica</MenuItem>
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
                <AppBar position="static" elevation={0} style={{background: "#2E3B55"}}>
                    <Toolbar>
                            <img src={require("./img/logo.png")} alt="Logo Intelix" style={{paddingTop: "10px", paddingLeft:"20px", paddingBottom:"10px", width: "160px", height: "30px"}}/>
                            <span className={classes.flex}></span>
                            <IconButton className={classes.menuButton} color="contrast" onClick={e=> this.setState(({anchor: e.currentTarget}))} edge="end">
                                <AccountCircle/>
                            </IconButton>

                            <Menu className={classes.menu} anchorEl={this.state.anchor} open={Boolean(this.state.anchor)}
                                  onClose={this.closeMenu} aria-label="User">
                                <MenuItems closeMenu={this.closeMenu} />
                            </Menu>


                            <IconButton className={classes.menuButton} color="contrast"  onClick={e=> this.setState(({anchor2: e.currentTarget}))}  edge="end">
                                <SettingsIcon/>
                            </IconButton>
                            <Menu className={classes.menu} anchorEl={this.state.anchor2} open={Boolean(this.state.anchor2)}
                                 aria-label="Mantenimiento" onClose={this.closeMenu}>
                                <MenuItems2 closeMenu={this.closeMenu} />
                            </Menu>

                    </Toolbar>
                </AppBar>

                <div className={classes.toolbarMargin}/>
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
