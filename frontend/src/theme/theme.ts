import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {red} from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface CommonColors {
        softColor: string;
        lightBgColor: string;
    }
}

const theme = responsiveFontSizes(createTheme({
    palette: {
        common: {
            softColor: '#ffe6dc',
            lightBgColor: '#f0f1f2',
        },
        error: {
            main: red.A400,
        },
        info: {
            main: '#335c6e',
        },
        primary: {
            main: '#5acccc',
            light: '#cffafa',
            dark: '#28b8b8',
        },
        secondary: {
            main: '#f76434',
        },
    },
    typography: {
        button: {
            fontWeight: 800,
        },
        fontFamily: 'Mulish Variable, sans-serif',
        h1: {
            fontWeight: 800,
        },
        h2: {
            fontWeight: 800,
        },
        h3: {
            fontWeight: 800,
        }
    },

}));

export default theme;