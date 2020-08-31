import useStyles from './portafolio.styles';
import { Typography, Paper } from '@material-ui/core';
import React from 'react';
import FilterPortafolio from './filterPortafolio'


const PaperTitlePortafolio = (props) => {

    const classes = useStyles();

    let content = (
       
          <Paper className={classes.paper} elevation={0}>
                <Typography type="title" color="primary" variant="h6"
            className={classes.rootPaper} gutterBottom> 
                    {props.title}
                </Typography>
                <FilterPortafolio search={props.search} setSearch={props.setSearch} client={props.client} coa={props.coa} status={props.status} selectCli={props.selectCli} selectCoa={props.selectCoa} selectEst={props.selectEst} setSelectCli={props.setSelectCli} setSelectCoa={props.setSelectCoa} setSelectEst={props.setSelectEst} cb={props.cb} setCb={props.setCb} selectedDesdeDate={props.selectedDesdeDate} setSelectedDesdeDate={props.setSelectedDesdeDate}
                selectedHastaDate={props.selectedHastaDate} setSelectedHastaDate={props.setSelectedHastaDate}
                valueRadio={props.valueRadio} setValueRadio={props.setValueRadio}/>
                
          </Paper>

    )
    return content;
}


export default PaperTitlePortafolio;