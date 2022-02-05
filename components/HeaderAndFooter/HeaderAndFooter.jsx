import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const HeaderAndFooter = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default HeaderAndFooter
