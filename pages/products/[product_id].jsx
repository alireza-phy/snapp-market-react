import {useRouter} from 'next/router' ;
import React from "react";
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import ProductData from '../../components/ProductData/ProductData'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import {similarProducts, ourOffer} from '../../components/ProductData/ProductData'
import Box from '@mui/material/Box';
import {Container} from "@mui/material";

const Products = ({ProductList}) => {

    const router = useRouter();

    let currentProduct = ProductList.filter(product => product.id == router.query.product_id)[0]
    console.log(similarProducts(router.query.product_id).length)
    return (
        <Container
            maxWidth='lg'
            sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>

            <SingleProduct
                currentProduct={currentProduct}
            />
            {
                (similarProducts(router.query.product_id).length > 0)
                &&
                <Box>
                    <ProductsCategory
                        specialCategory={similarProducts(router.query.product_id)}
                        ordinary
                    />
                </Box>
            }
            <Box>
                {
                    (ourOffer(router.query.product_id).length > 0)
                    &&
                    <Box>
                        <ProductsCategory
                            specialCategory={ourOffer(router.query.product_id)}
                            ordinary
                        />
                    </Box>
                }
            </Box>
        </Container>
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