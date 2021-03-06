import React from 'react';
import useStyles from './login.styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import GoogleLogin from 'react-google-login';
import config from '../../bin/config/config';
import axios from "axios";
import ModalRefuse from '../modalRefuse/modalRefuse';

const Login = (props) => {
    const classes = useStyles();
    const [openRefuse, setOpenRefuse] = React.useState(false);

    const handleClickOpenRefuse = () => {
        setOpenRefuse(true);
      };
    
      const handleCloseRefuse = () => {
        setOpenRefuse(false);
      };

    const responseGoogle = (response) => {

    if (config.clients.includes(response.profileObj.email)) {
        console.log("Hola cliente")
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .get('user/' + localStorage.email)
            .then((data) => {
                
                if (data.data.type === 'Not Data') {
                    console.log("No existe")
                    addUser()
                } else {
                    getClienteById(data.data[0].userId)
                }
            })
            .catch((err) => {
                
            });
    } else if (config.respns.includes(response.profileObj.email) || config.leaders.includes(response.profileObj.email)) {
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        console.log("Hola responsable")
        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_BACK_URL,

            headers: { 'Accept': 'application/json' }
        });
        axiosInstance
            .get('user/' + localStorage.email)
            .then((data) => {
                
                if (data.data.type === 'Not Data') {
                    console.log("No existe")
                    axiosInstance
                        .post('user', {
                            userName: localStorage.name,
                            userFullName: localStorage.name,
                            userContactEmail: localStorage.email
                        })
                        .then((data) => {
                            
                            console.log('guardado');
                            localStorage.setItem("respon", data.data.users.userId);
                            window.location.reload();
                        })
                        .catch((err) => {
                            
                        });
                    
                } else {
                    localStorage.setItem("respon", data.data[0].userId);
                    window.location.reload();
                }
            })
            .catch((err) => {
                
            });
    } else if (config.admins.includes(response.profileObj.email)) {
        console.log('Hola Pmo')
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("respon", []);
        window.location.reload();

    } else {
        console.log('Hola Extranho')
        handleClickOpenRefuse();
        
    }
    
}
const addUser = () => {

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });

    axiosInstance
        .post('user', {
            userName: localStorage.name,
            userFullName: localStorage.name,
            userContactEmail: localStorage.email
        })
        .then((data) => {
            
            console.log('guardado');
            console.log(data.data.users.userId);
            localStorage.setItem("clientIds", "9999");
            window.location.reload();
        })
        .catch((err) => {
            
        });
        
}

const getClienteById = (id) => {

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' }
    });

    axiosInstance
    .get('userClient/' + id)
    .then((data) => {
        if (data.data.type === 'Not Data') {
            console.log('No hat data')
            localStorage.setItem("clientIds", "9999");
            window.location.reload();
        } else {
            console.log(data.data)
            let ids = []
            for (var i = 0; i <= (data.data.length - 1); i++) {
                console.log(data.data[i].cliId)
                ids[i] = data.data[i].cliId
            }
            console.log(ids)

            localStorage.setItem("clientIds", ids);
            window.location.reload();
            
        }


    })
    .catch((err) => {
        
    });
    
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
                <Box mt={2} mb={2}>
                <GoogleLogin
                className={classes.login}
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
        <ModalRefuse open={openRefuse} onClose={handleCloseRefuse} info={"Usted no posee rol asignado"}/>
    </Grid>


    )
    return content;
}

export default Login;
