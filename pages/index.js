import Head from "next/head";
import styles from '../styles/Home.module.css'
import {useEffect , useState} from "react";
import Image from "next/image";
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Assortment from "../components/Assortment/Assortment";
import {Container} from "@mui/material";
import marketParty from '../public/mainpageImages/Banners/marketparty.jpg'
import {getCategory} from '../library/axios/getData';

export default function Home() {

    const [category, setCategory] = useState(
        [
            {
                id: 1,
                name: 'شیر',
                brand: {
                    brandEn: 'pak',
                    brandPe: 'پاک',
                },
                images: [
                    {
                        id: 1,
                        url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
                    },
                    {
                        id: 2,
                        url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e671bbe9.jpg'
                    },
                ],
                category: {
                    categoryEn: 'dairy-product',
                    categoryPe: 'لبنیات'
                },
                group: {
                    groupId: 1,
                    groupName: 'شیر'
                },
                inventory: {
                    available: true,
                    quantity: 9,
                },
                seller: 'هایپر استار',
                tags: [
                    {id: 1, name: 'کم چرب'},
                    {id: 2, name: 'ساده'}
                ],
                price: 10900,
                discount: 14,
                MaximumOrder: 4
            }]
    );

    useEffect( () => {
        getCategory('dairy-product')
            .then(data => setCategory(data.products.slice(0,9)))
    } , [])


    return (
        <Container sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '2rem'}}>

            <Head>
                <title> فروشگاه اینترنتی اسنپ </title>
                <meta name='keywords' content='marketing site, developed with nextJs'/>
            </Head>

            <Image src={marketParty}/>
            <Assortment/>
            <ProductsCategory
            categoryList = {category}
            />

        </Container>
    )
}
