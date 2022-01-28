import Head from "next/head";
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
// import ProductSingle from "../components/ProductCard/ProductCard";


export default function Home() {

  // const imagepack = [
  //   {
  //     src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
  //   },{
  //     src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
  //   },{
  //     src:'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'
  //   }
  // ] ;

  useEffect(() => {
    fetch("/api/products")
        .then(res => res.json())
        .then(data => console.log(data.products))
  }, [])

  return (
      <div className={styles.container}>
        <Head>
          <title> فروشگاه اینترنتی اسنپ </title>
          <meta name='keywords' content='marketing site, developed with nextJs'/>
        </Head>
        <h4>پروژه اسنپ مارکت</h4>
        {/*<ProductSingle*/}
        {/*    src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'*/}
        {/*    width='14.1rem'*/}
        {/*    ordinary*/}
        {/*/>*/}
        {/*<ProductSingle*/}
        {/*    src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf1e4112f33.jpg'*/}
        {/*    width='14.1rem'*/}
        {/*    special*/}
        {/*/>*/}
        {/*<ProductSingle*/}
        {/*    width='14.1rem'*/}
        {/*    imgPack = {imagepack}*/}
        {/*    goldenOffer*/}
        {/*/>*/}
      </div>
  )
}
