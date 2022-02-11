import {useRouter} from 'next/router' ;
import React from "react";
import CategoryMenu from '../../components/Categories/CategoryMenu';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductData,{getSubCategory} from '../../components/ProductData/ProductData'
import PageDescription from '../../components/PageDescription/PageDescription'
import Container from '@mui/material/Container'
const Categories = ({ProductList}) => {

    const router = useRouter();

    let currentCategory = ProductList.filter(product => product.categoryEn === router.query.category_name)
    console.log(currentCategory)

    return (
        <Container>
        <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
            <CategoryMenu
                subCategory={getSubCategory(currentCategory[0].categoryEn)}
            />
            <Grid item xs={12} sm={12} md={9} xl={9}>
                <Breadcrumb
                    category={currentCategory[0].categoryPe}
                />
                <Box>
                    {getSubCategory(currentCategory[0].categoryEn).map(obj =>
                        <ProductsCategory
                            key={obj.id}
                            groupNameObject = {obj}
                            ordinary
                        />
                    )}
                </Box>
            </Grid>
            <PageDescription/>
        </Grid>
        </Container>
    )
}

export default Categories

export async function getStaticPaths() {

    return {
        paths: [
            {params: {category_name: 'drinks'}}
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