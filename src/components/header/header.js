import React from 'react';
import useStyles from './header.styles';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import Cuenta from './cuenta';
import Mantenimiento from './mantenimiento';

import logo from '../../images/logo-intelix-white.png';

  
// rafc
const Header = (props) => {
 

    const classes = useStyles();
    let content = (
        
             <AppBar position="fixed" color="primary">
              <Toolbar>              
              <img className= { classes.menu } src={logo} alt="Logo Intelix" />
                <Typography className={classes.title} type="title" color="inherit" variant="subtitle2">
                    Portafolio de Solicitudes
                </Typography>
                <Cuenta/>
                <Mantenimiento/>
              </Toolbar>
            </AppBar>
            
        
    );
    return content;
};


export default Header;