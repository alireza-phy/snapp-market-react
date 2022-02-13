import Header from "../Header/Header";
import HeaderStatic from '../HeaderStatic/HeaderStatic'
import Footer from "../Footer/Footer"
import {useEffect, useState} from "react";

const HeaderAndFooter = ({children}) => {
    const [scrollBarStatic, setScrollBarStatic] = useState(false)
    const [scrollBarHome, setScrollBarHome] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenCart, setDrawerOpenCart] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 230) {
                setScrollBarHome(true)
                setScrollBarStatic(false)
            }
            if (window.scrollY >= 230) {
                setScrollBarHome(false)
                setScrollBarStatic(true)
            }
        })
    }, [])
    //Drawer Category
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    };
    // Drawer Cart
    const toggleDrawerCart = (value) => {
        setDrawerOpenCart(value)
    };
    const [value, setValue] = useState('Home');
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {
                scrollBarHome
                &&
                <Header drawerOpen={drawerOpen}
                        drawerOpenCart={drawerOpenCart}
                        toggleDrawer={toggleDrawer}
                        toggleDrawerCart={toggleDrawerCart}
                        value = {value}
                        handleChange = {handleChange}
                />
            }
            {
                scrollBarStatic
                &&
                <HeaderStatic drawerOpen={drawerOpen}
                              drawerOpenCart={drawerOpenCart}
                              toggleDrawer={toggleDrawer}
                              toggleDrawerCart={toggleDrawerCart}
                              value = {value}
                              handleChange = {handleChange}
                />
            }
            {children}
            <Footer/>
        </>
    )
}

export default HeaderAndFooter
