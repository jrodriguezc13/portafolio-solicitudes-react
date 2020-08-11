import {createMuiTheme} from "@material-ui/core";


// Custom Theme
export const customTheme = createMuiTheme({
    palette: {
        primary: {
           main: "#00bcb5",
            /*  50 : "#e0f7f6",
              100 : "#b3ebe9",
               200 :"#80deda",
               300 : "#4dd0cb",
               400 : "#26c6c0",
               500 : "#00bcb5",
               600 : "#00b6ae",
               700 : "#00ada5",
               800 : "#00a59d",
               900 : "#00978d",
               A100 : "#c2fffb",
               A200 : "#8ffff7",
               A400 : "#5cfff3",
               A700 : "#42fff1",*/
            contrastText: "#000000",
        },
    },
    fontFamily: '"Gil-Sans", "sans-serif", "Montserrat"'
});
