import React from 'react';
import useStyles from './login.styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import GoogleLogin from 'react-google-login';
import config from '../../bin/config/config';

const Login = (props) => {
    const classes = useStyles();

    const responseGoogle = (response) => {
    localStorage.setItem("email", response.profileObj.email);
    localStorage.setItem("name", response.profileObj.name);
    window.location.reload();
}

    function Copyright() {
        return (
          <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            {'Intelix Synergy '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    let content = (


    <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Portafolio de Solicitudes
            </Typography>
            <form className={classes.form} method="post">
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
               
                <Box mt={2} mb={2}>
                <GoogleLogin
                clientId={config.clientId}
                buttonText="Iniciar Sesión"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
                </Box>
                <Copyright />
            </form>
            </div>
        </Grid>
    </Grid>


    )
    return content;
}

export default Login;
