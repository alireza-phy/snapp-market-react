import Head from "next/head";
import styles from '../styles/Home.module.css'
import {useEffect , useState} from "react";
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Assortment from "../components/Assortment/Assortment";
import {Container} from "@mui/material";
import marketParty from '../public/mainpageImages/Banners/marketparty.jpg'
import bijan from '../public/mainpageImages/Banners/bijan.jpg'
import kale from  '../public/mainpageImages/Banners/kale2.jpg'
import pakshooma from  '../public/mainpageImages/Banners/pakshooma.jpg'
import specialOffer from  '../public/mainpageImages/Banners/specialOffer.jpg'
import {getCategory} from '../library/axios/getData';
import Box from '@mui/material/Box'
export default function Home() {

    const [categoryList, setCategoryList] = useState([{
                id: 1,
                name: '',
                brand: {
                    brandEn: '',
                    brandPe: '',
                },
                images: [
                    {
                        id: 1,
                        url: ''
                    },
                    {
                        id: 2,
                        url: ''
                    },
                ],
                category: {
                    categoryEn: '',
                    categoryPe: ''
                },
                group: {
                    groupId: 1,
                    groupName: ''
                },
                inventory: {
                    available: true,
                    quantity: 0,
                },
                seller: '',
                tags: [
                    {id: 1, name: ''},
                    {id: 2, name: ''}
                ],
                price: 0,
                discount: 0,
                MaximumOrder: 0
            }]);

    useEffect( () => {
        getCategory('dairy-product')
            .then(data => setCategoryList(data.products.slice(0,9)))
    } , [])


    return (
        <Container sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '2rem'}}>

            <Head>
                <title> فروشگاه اینترنتی اسنپ </title>
                <meta name='keywords' content='marketing site, developed with nextJs'/>
            </Head>

            <Box component="img" src={marketParty.src} sx={{width:'100%' , margin:'auto' , borderRadius: '0.5rem'}}/>
            <ProductsCategory
                ordinary
                categoryList = {categoryList}
            />
            <ProductsCategory
                special
                categoryList = {categoryList}
                spBlue
                spTitle='حراج اول ماه'
            />
            <ProductsCategory
                goldenOffer
                categoryList = {categoryList}
            />
            <Box component="img" src={bijan.src} sx={{width:'100%' , margin:'auto' , borderRadius: '0.5rem'}}/>
            <Assortment/>

        </Container>
    )
}
