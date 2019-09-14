import { createMuiTheme } from '@material-ui/core/styles';
import DS from './design-system';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    disableRipple: true,
    palette: {
        primary: {
            light: DS.PALETTE.BLUE_LIGHT,
            main: DS.PALETTE.BLUE,
            dark: DS.PALETTE.BLUE_DARK,
            contrastText: DS.PALETTE.TEXT,
        },
        secondary: {
            light: DS.THEME.SECONDARY.light,
            main: DS.THEME.SECONDARY.main,
            dark: DS.THEME.SECONDARY.dark,
            contrastText: DS.THEME.SECONDARY.contrastText,
        },
    },
    overrides: {
        MuiAppBar: {
            // colorDefault: '#fff',
            // colorPrimary: 'red'
        },
        MuiButtonBase: {
            
        }
    },
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },

});

export default theme;