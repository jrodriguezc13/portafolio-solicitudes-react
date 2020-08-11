import React from 'react';
import { Typography, Tooltip, Menu, MenuItem, Fade, IconButton, ListItemIcon, Divider} from '@material-ui/core';
// Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';

const Cuenta = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    let content = (
        <div>
            <Tooltip title="Cuenta">
                    <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} aria-label="cuenta">
                    <AccountCircleIcon/>
                    </IconButton>
            </Tooltip>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} TransitionComponent={Fade} style={{"margin-top": "35px"}}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon >
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Perfil</Typography>
                  </MenuItem>
                  <Divider/>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon >
                        <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Logout</Typography>
                  </MenuItem>
              </Menu>

        </div>

    );
    return content;
};

export default Cuenta;
