import {useRouter} from 'next/router' ;
import React from "react";
import CategoryMenu from '../../components/Categories/CategoryMenu';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Categories = () => {
    const router = useRouter();

    return (

        <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
            <CategoryMenu
                category={`${router.query.category_name}`}
            />
            <Grid item xs={12} sm={12} md={9} xl={9}>
                <Breadcrumb
                    category={`${router.query.category_name}`}
                />
                <Box>
                    <ProductsCategory
                        // groupId = {2}
                        categorySub={`${router.query.category_name}`}
                        ordinary
                    />
                    {/*)}*/}

                    {/*<ProductsCategory*/}
                    {/*    groupId = {2}*/}
                    {/*    categorySub={`${router.query.category_name}`}*/}
                    {/*    ordinary*/}
                    {/*/>*/}
                    {/*<ProductsCategory*/}
                    {/*    groupId = {3}*/}
                    {/*    categorySub={`${router.query.category_name}`}*/}
                    {/*    ordinary*/}
                    {/*/>*/}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Categories

// function Categories({ProductData}) {
//
//     console.log(ProductData)
//     const router = useRouter();
//
//     console.log(router.query.category_name);
//
//     return <h1> hello world: {router.query.category_name} </h1>
// }

// export default Categories

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {params: {category_name: 'drinks'}}
//         ],
//         fallback: 'blocking'
//     };
// }
//
// export async function getStaticProps(context) {
//     let ProductData = []

    // fetch('/api/assortmentCard')
    //     .then(response => response.json())
    //         .then(data =>{ ProductData = data.assortmentCards
    //             console.log(data)
    //         } );
    // console.log(ProductData)
//
//     return {
//         props: {ProductData}, // will be passed to the page component as props
//     }
// }