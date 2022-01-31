import Head from "next/head";
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import ProductSingle from "../components/ProductCard/ProductCard";

import Image from "next/image";
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Assortment from "../components/Assortment/Assortment";
import {Container} from "@mui/material";

export default function Home() {

  const imagepack = [
    {
      src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
    },{
      src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
    },{
      src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
    }
  ] ;

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
            {/*<Image*/}
            {/*    src="https://api.snapp.market/uploads/images/mobile-sliders/61f4f4b449e88.jpg"*/}
            {/*    width={1200}*/}
            {/*    height={400}*/}
            {/*    layout='fill'*/}
            {/*/>*/}
            <Assortment/>
            <ProductsCategory/>
        </Container>
    )
}
