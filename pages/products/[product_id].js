import {useRouter} from 'next/router' ;
import React from "react";
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import ProductData from '../../components/ProductData/ProductData'

const Products = ({ProductList}) => {

    const router = useRouter();

    let currentProduct = ProductList.filter(product => product.id == router.query.product_id)[0]

    return (
        <>
            <SingleProduct
                currentProduct={currentProduct}
            />
        </>
    )
}

export default Products


export async function getStaticPaths() {

    return {
        paths: [
            {params: {product_id: '1'}}
        ],
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    console.log('#######################')
    console.log(context)
    let ProductList = ProductData

    return {
        props: {ProductList}, // will be passed to the page component as props
    }
}