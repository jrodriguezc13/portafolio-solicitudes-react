import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './custom-theme';

import Home from './components/Home';


ReactDOM.render( 

        <ThemeProvider theme = { theme }>       
        <Home/>
        </ThemeProvider>

        , document.getElementById('root'));