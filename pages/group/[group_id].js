import {useRouter} from 'next/router' ;
import React from "react";
import CategoryMenu from '../../components/Categories/CategoryMenu';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductData,{getSubCategory} from '../../components/ProductData/ProductData'

const Categories = ({ProductList}) => {

    const router = useRouter();

    // let currentCategory = ProductList.filter(product => product.categoryEn === router.query.group_id)
    // console.log(currentCategory)

    return (

        <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>

    <h1> hello : router.query.group_id </h1>
        </Grid>
    )
}

export default Categories

export async function getStaticPaths() {

    return {
        paths: [
            {params: {group_id: 'drinks'}}
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