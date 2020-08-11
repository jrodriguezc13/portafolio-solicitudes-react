import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './custom-theme';
import  {BrowserRouter as Router} from 'react-router-dom';
import Route from './router';



ReactDOM.render( 

        <ThemeProvider theme = { theme }>
                <Router>         
                        <Route/>
                </Router> 
        </ThemeProvider>

        , document.getElementById('root'));