import React from 'react';
import useStyles from './portafolio.styles';
import { Typography, Tooltip, Menu, MenuItem, Fade, IconButton } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FilterByDate from './filterByDate';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const FilterPortafolio = (props) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [cliente, setCliente] = React.useState([]);
    const [areaComercial, setAreaComercial] = React.useState([]);
    const [estado, setEstado] = React.useState([]);

    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSearchChange = e => {
        props.setSearch(e.target.value);
        console.log(props.search)
    };

    let content = (
        <div>
            <Tooltip title="Filtrar">
                    <IconButton color="inherit" aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick}  aria-label="Filtrar">
                        <FilterListIcon color="primary"/>
                    </IconButton>
            </Tooltip>

            <Menu
                id="simple-menu2"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                  <Typography color="primary" className={classes.filterTitle}>Filtrar</Typography>
                <form className={classes.formColumn}>
                    <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cliente}
                            onChange={(event) => setCliente(event.target.value)}
                            multiple
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>

                    <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Área comercial</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={areaComercial}
                            onChange={(event) => setAreaComercial(event.target.value)}
                            multiple
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>

                    <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Estado de solicitud</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={estado}
                            onChange={(event) => setEstado(event.target.value)}
                            multiple
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                    <FilterByDate/>
                    <InputBase
                        placeholder="Buscar por título"
                        className={classes.inputRoot}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onSearchChange}
                                value={props.search}
                    />
                    <div className={classes.buttons}>
                    <Button color="primary">
                        Todo
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary">
                        Buscar
                    </Button>
                </div>

                </form>
                
            </Menu>
                

        </div>

    )

    return content;

    
}

export default FilterPortafolio;