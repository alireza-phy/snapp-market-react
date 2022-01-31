import {createTheme} from '@mui/material/styles';
import IranSans100 from "../public/fonts/woff2/IRANSansWeb(FaNum)_UltraLight.woff2";
import IranSans200 from "../public/fonts/woff2/IRANSansWeb(FaNum)_Light.woff2";
import IranSans300 from "../public/fonts/woff2/IRANSansWeb(FaNum).woff2";
import IranSans400 from "../public/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2";
import IranSans500 from "../public/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2";
import IranSans600 from "../public/fonts/woff2/IRANSansWeb(FaNum)_Black.woff2";


const theme = createTheme({
    direction: 'rtl',
    components: {
        MuiCssBaseline: {
            styleOverrides:
                {
                    "@font-face": {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 100,
                        src: `url(${IranSans100}) format('woff')`,
                    },
                    fallbacks: [{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 200,
                        src: `url(${IranSans200}) format('woff')`,
                    }, {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 300,
                        src: `url(${IranSans300}) format('woff')`,
                    }, {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 400,
                        src: `url(${IranSans400}) format('woff')`,
                    }, {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 500,
                        src: `url(${IranSans500}) format('woff')`,
                    }, {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 600,
                        src: `url(${IranSans600}) format('woff')`,
                    }],

                }
        },
    },
    typography: {
        fontFamily: "iranSans",
    },
    body: {
        fontWeight: 400,
        fontsize: 14,
    }
});

export default theme;