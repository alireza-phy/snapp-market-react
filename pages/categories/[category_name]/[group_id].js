import {useRouter} from 'next/router' ;
import React from "react";
import ProductData from '../../../components/ProductData/ProductData'
import Page4 from '../../../components/Page4/Page4'
import HeaderStatic from '../../../components/HeaderStatic/HeaderStatic'

export default function group({ProductList}) {

    const router = useRouter();

    // let currentProduct = ProductList.filter(product => product.id == router.query.product_id)[0]
    console.log(router.query.group_id)
    console.log(router.query.category_name)
    return (
        <>
            <HeaderStatic/>
        <Page4
            groupId={router.query.group_id}
            categoryName={router.query.category_name}
        />
        </>

    )
}

export async function getStaticPaths() {

    return {
        paths: [
            {params: {group_id: '1', category_name: 'dairyProduct'}}
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