import Head from "next/head";
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import ProductSingle from "../components/ProductCard/ProductCard";
import Image from "next/image";
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Assortment from "../components/Assortment/Assortment";
import {Container} from "@mui/material";
import marketparty from '../public/mainpageImages/Banners/marketparty.jpg'

export default function Home() {

  useEffect(() => {
    fetch("/api/products")
        .then(res => res.json())
        .then(data => console.log(data.products))
  }, [])

    return (
        <Container sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '2rem'}}>

            <Head>
                <title> فروشگاه اینترنتی اسنپ </title>
                <meta name='keywords' content='marketing site, developed with nextJs'/>
            </Head>

            <Image src={marketparty}/>
            <Assortment/>
            <ProductsCategory/>
        </Container>
    )
}
