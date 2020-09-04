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
import config from '../../bin/config/config';

const FilterPortafolio = (props) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const data = props.client === null ? [] : props.client.data;
    const dataCoa = props.coa === null ? [] : props.coa.data;
    const dataStatus = props.status === null ? [] : props.status.data;


    
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.selectCoa)
        console.log(props.selectCli)
        console.log(props.selectEst)
        props.setCb(!props.cb);
        
    }
    const restart = () => {
        props.setSelectCli([])
        props.setSelectCoa([])
        props.setSelectEst([])
        props.setSelectedDesdeDate(null)
        props.setSelectedHastaDate(null)
        props.setCb(!props.cb);

    }

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
                <form className={classes.formColumn} onSubmit={handleSubmit}>
                {config.clients.includes(localStorage.email)
                  ?  null :
                  <FormControl className={classes.form}>
                        <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.selectCli}
                        onChange={(event) => props.setSelectCli(event.target.value)}
                        multiple
                        >
                            {data.map((data) => (
                                <MenuItem key={data.cliId} value={data.cliId}>
                                {data.cliName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                  
                }
                    

                    <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Área comercial</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.selectCoa}
                            onChange={(event) => props.setSelectCoa(event.target.value)}
                            multiple
                            >
                                {dataCoa.map((data) => (
                                    <MenuItem key={data.coaId} value={data.coaId}>
                                    {data.coaName}
                                    </MenuItem>
                                ))}
                            </Select>
                    </FormControl>

                    <FormControl className={classes.form}>
                            <InputLabel id="demo-simple-select-label">Estado de solicitud</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.selectEst}
                            onChange={(event) => props.setSelectEst(event.target.value)}
                            multiple
                            >
                                {dataStatus.map((data) => (
                                    <MenuItem key={data.estId} value={data.estId}>
                                    {data.estName}
                                    </MenuItem>
                                ))}
                            </Select>
                    </FormControl>
                    <FilterByDate selectedDesdeDate={props.selectedDesdeDate} setSelectedDesdeDate={props.setSelectedDesdeDate} selectedHastaDate={props.selectedHastaDate} setSelectedHastaDate={props.setSelectedHastaDate} valueRadio={props.valueRadio} setValueRadio={props.setValueRadio}/>
                    <InputBase
                        placeholder="Buscar por título"
                        className={classes.inputRoot}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onSearchChange}
                                value={props.search}
                    />
                    <div className={classes.buttons}>
                    <Button color="primary" onClick={() => restart()}>
                       Ver Todo
                    </Button>
                    <Button type="submit"
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