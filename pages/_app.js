import '../styles/globals.css'
import {makeServer} from "../mirage";
import HeaderAndFooter from "../components/HeaderAndFooter/HeaderAndFooter";
import {CssBaseline , ThemeProvider} from "@mui/material";
import theme from "../styles/theme";

if (process.env.NODE_ENV === "development") {
    makeServer({environment: "development"})
}

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HeaderAndFooter>
                <Component {...pageProps} />
            </HeaderAndFooter>
        </ThemeProvider>
    )
}

export default MyApp
