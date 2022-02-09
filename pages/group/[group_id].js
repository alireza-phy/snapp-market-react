import {useRouter} from 'next/router' ;
import React from "react";
import ProductData from '../../components/ProductData/ProductData'
import Page4 from '../../components/Page4/Page4'

export default function group({ProductList}) {

    const router = useRouter();

    return (
        <Page4/>

    // let currentCategory = ProductList.filter(product => product.categoryEn === router.query.group_id)
    // console.log(currentCategory)

    )
}

export async function getStaticPaths() {

    return {
        paths: [
            {params: {group_id: '1'}}
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