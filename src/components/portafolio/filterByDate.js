import React from 'react';
import Popover from '@material-ui/core/Popover';
import useStyles from './portafolio.styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const FilterByDate = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      const [value, setValue] = React.useState('female');

        const handleChange = (event) => {
            setValue(event.target.value);
        };
    let content = (

        <div>

            <Button className={classes.buttonDate} aria-describedby={id} color="primary" onClick={handleClick}>
                Por fecha
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <div className={classes.subMenu}>

                    <FormControl component="fieldset">
                    
                    <Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <FormLabel component="legend">Por fecha</FormLabel>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio color="primary" />} label="Fecha solicitud"  />
                                <FormControlLabel  value="male" control={<Radio color="primary" />} label="Fecha inicio"  />
                                <FormControlLabel value="alien" control={<Radio color="primary" />} label="Fecha fin planificada"  />
                                <FormControlLabel value="mixto" control={<Radio color="primary" />} label="Fecha fin entrega/Real"  />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/DD/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/DD/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        </Grid>

                    </Grid>
                  
                    </FormControl>
                </div>
            </Popover>
        </div>
    );
    return content;
}

export default FilterByDate;