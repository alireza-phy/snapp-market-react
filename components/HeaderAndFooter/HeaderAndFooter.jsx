import Header from "../Header/Header";

const HeaderAndFooter = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <h2> فوتر فروشگاه اینترنتی اسنپ مارکت </h2>
        </>
    )
}

export default HeaderAndFooter
