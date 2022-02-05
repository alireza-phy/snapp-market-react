import React from "react";
import Category from '../../components/Categories/Category'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory'
import ProductCard from '../../components/ProductCard/ProductCard'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import NextLink from 'next/link'
import Link from '@mui/material/Link'

const Categories = () => {
    return (

        <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
            {/*<NextLink href={{*/}
            {/*    pathname: '/categories/[name]',*/}
            {/*    query: { name: 'komij' },*/}
            {/*}} passHref>*/}
            {/*    <Link> hello </Link>*/}
            {/*</NextLink>*/}
            {/*<Category/>*/}
            <Grid item xs={12} sm={12} md={9} xl={9}>
                <Breadcrumb/>
                <Box>
                    <ProductsCategory
                        categorySub={'dairy-product'}
                        ordinary
                    />
                    <ProductsCategory
                        categorySub={'dairy-product'}
                        ordinary
                    />
                    <ProductsCategory
                        categorySub={'dairy-product'}
                        ordinary
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Categories