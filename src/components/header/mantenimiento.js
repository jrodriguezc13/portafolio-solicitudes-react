import React from 'react';
import { Typography, Tooltip, Menu, MenuItem, Fade, IconButton, Divider } from '@material-ui/core';
// Icons
import SettingsIcon from '@material-ui/icons/Settings';

const Mantenimiento = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    let content = (
        <div>
            <Tooltip title="Mantenimiento">
                    <IconButton color="inherit" aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick}  aria-label="mantenimiento">
                            <SettingsIcon/>
                    </IconButton>
                  </Tooltip>
                
              <Menu
                id="simple-menu2"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                style={{"margin-top": "35px"}}>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit" >Portafolio</Typography>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Clientes</Typography>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Área comercial</Typography>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Estado de solicitud</Typography>           
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Tipo de solicitud</Typography>           
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Área técnica</Typography>           
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                <Typography variant="inherit">Asignar cliente</Typography>           
                </MenuItem>
                
              </Menu>

        </div>

    );
    return content;
};

export default Mantenimiento;
