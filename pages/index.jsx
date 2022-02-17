import Head from "next/head";
import styles from '../styles/Home.module.css'
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Assortment from "../components/Assortment/Assortment";
import {Container} from "@mui/material";
import PageDescription from '../components/PageDescription/PageDescription'
import Box from '@mui/material/Box'
import {SpecialCategory_marketParty , SpecialCategory_nessesaryForHome} from '../components/ProductData/ProductData'
import Header from "../components/Header/Header";
import HeaderStatic from '../components/HeaderStatic/HeaderStatic';
import {useEffect, useState} from "react";
// ---------------- images ------------------ //

import marketParty from '../public/mainpageImages/Banners/marketparty.jpg'
import bijan from '../public/mainpageImages/Banners/bijan.jpg'
import kale from '../public/mainpageImages/Banners/kale.jpg'
import kale2 from '../public/mainpageImages/Banners/kale2.jpg'
import pakshooma from '../public/mainpageImages/Banners/pakshooma.jpg'
import bHaminTazegi from '../public/mainpageImages/Banners/bHaminTazegi.jpg'
import specialOffer from '../public/mainpageImages/Banners/specialOffer.jpg'

// ---------------- images ------------------ //

export default function Home() {

    const [scrollBarStatic, setScrollBarStatic] = useState(false)
    const [scrollBarHome, setScrollBarHome] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerOpenCart, setDrawerOpenCart] = useState(false)
    const [slideDrawerModal, setSlideDrawerModal] = useState(true)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 230) {
                setScrollBarHome(true)
                setScrollBarStatic(false)
                setSlideDrawerModal(false)
            }
            if (window.scrollY >= 230) {
                setScrollBarHome(false)
                setScrollBarStatic(true)
                setSlideDrawerModal(true)
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
                        slideDrawerModal={slideDrawerModal}
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
                              slideDrawerModal={slideDrawerModal}
                />
            }
            <Container
                maxWidth='lg'
                sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>

                <Head>
                    <title> فروشگاه اینترنتی اسنپ </title>
                    <meta name='keywords' content='marketing site, developed with nextJs'/>
                </Head>

                <Box component="img" src={marketParty.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    special
                    spBlue
                    spTitle='مارکت پارتی'
                    // categorySub={'dairyProduct'}
                    specialCategory={SpecialCategory_marketParty()}
                />
                <Box component="img" src={specialOffer.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <Assortment/>
                <Box component="img" src={kale.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    categorySub={'dairyProduct'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'grocery-bread'}
                    ordinary
                />
                <Box component="img" src={kale2.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    goldenOffer
                />
                <ProductsCategory
                    categorySub={'detergent'}
                    ordinary
                />
                <Box component="img" src={bHaminTazegi.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    categorySub={'junk-food'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'drinks'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'proteins'}
                    ordinary
                />
                <ProductsCategory
                    special
                    spBlue
                    spTitle='تو هر خونه لازمه'
                    specialCategory={SpecialCategory_nessesaryForHome()}
                />
                <ProductsCategory
                    categorySub={'health-and-beauty'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'condiment'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'fruit-and-vegetables'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'canned-food'}
                    ordinary
                />
                <Box component="img" src={pakshooma.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    categorySub={'breakfast'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'nuts'}
                    ordinary
                />
                <Box component="img" src={specialOffer.src}
                     sx={{width: '100%', margin: 'auto', borderRadius: '0.5rem'}}/>
                <ProductsCategory
                    categorySub={'home-and-lifestyle'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'appliances'}
                    ordinary
                />
                <ProductsCategory
                    categorySub={'kids'}
                    ordinary
                />
                <PageDescription/>
            </Container>
            </>
    )
}