import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './custom-theme';
import  {BrowserRouter as Router} from 'react-router-dom';
import Route from './router';
import Login from './components/login/login';

        if(localStorage.getItem("email") == null) {
                ReactDOM.render(
                        <ThemeProvider theme = { theme }>
                                <Login />
                        </ThemeProvider>
                                
                        , document.getElementById('root'))

        } else {

                ReactDOM.render( 

                        <ThemeProvider theme = { theme }>
                                <Router>         
                                        <Route/>
                                </Router> 
                        </ThemeProvider>
                
                        , document.getElementById('root'));

        }


