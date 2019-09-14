const DESIGN_SYSTEM = {
    BORDER_RADIUS: '4px',
    FONT_FAMILY:{
        REGULAR:'robotoregular'
    } ,
    PALETTE : {
        WHITE: "#ffff",
        BLACK: "#000",
        BLUE: "#2971ee",
        BLUE_LIGHT: "#bbd4fc",
        BLUE_DARK: "#083b97",
        GRAY: "#f5f5f5",
        BG_LIGHT_BLUE: "#f6f9fe",
        BG: "#eeeeee",
        BG_LIGHT: "#f4f5f6",
        TEXT: "#283648",
        TEXT_DARK: "#222222",
        TEXT_MUTED: "#dbdbdb",
        GREEN_LIGHT: "#5890dc38",
        TEXT_BOX_SHADOW: "#e3e3e3",
        LIGHT_PINK: '#fbe9eb'

    },
    BREAKPOINTS: {
        SM: 576,
        MD: 768,
        LG: 992,
        XL: 1200
    },
    THEME: {
        PRIMARY: {
            light: function(){ return  DESIGN_SYSTEM.PALETTE.BLUE_LIGHT },
            main: function(){ return DESIGN_SYSTEM.PALETTE.BLUE } ,
            dark: function(){ return DESIGN_SYSTEM.PALETTE.BLUE_DARK } ,
            contrastText: function(){ return DESIGN_SYSTEM.PALETTE.TEXT },
        },
        SECONDARY: {
            light: '#ff7961',
            main: '#f44336' ,
            dark: '#ba000d' ,
            contrastText: '#000'
        }

    },
    HIGHCHARTS: {       
        colors: function(){ return [ DESIGN_SYSTEM.PALETTE.BLUE_DARK, DESIGN_SYSTEM.PALETTE.BLUE_LIGHT, DESIGN_SYSTEM.PALETTE.BLUE ]},
        background: function(){ return DESIGN_SYSTEM.PALETTE.BG_LIGHT_BLUE }
    }, 
    BUTTON: {
        SMALL: {
            width: 120,
            height: 24,
            fontSize: 13
        },
        DEFAULT: {
            width: 140,
            height: 32,
            fontSize: 16
        },
        LARGE: {
            width: 180,
            height: 40,
            fontSize: 18
        }
    },
    SELECT: {
         SMALL: {
            width: 160,
            height: 40,
            fontSize: 13,
        },
        DEFAULT: {
            width: 275,
            height: 46,
            fontSize: 16,
        },
        LARGE: {
            width: 300,
            height: 48,
            fontSize: 18,
        }
    },
    TOOLTIPS: {
        SMALL: {
            width: 48,
            height: 48,
            fontSize: 14
        },
        LARGE: {
            width: 60,
            height: 60,
            fontSize: 18
        }
    },
    
}

export const BOX_SHADOW = `0 0 3px 2px ${DESIGN_SYSTEM.PALETTE.TEXT_BOX_SHADOW}`;

export default DESIGN_SYSTEM;