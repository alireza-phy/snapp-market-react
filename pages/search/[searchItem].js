import {useRouter} from 'next/router' ;
import React from "react";
import ProductData from '../../components/ProductData/ProductData'
import Page4 from '../../components/Page4/Page4'

export default function group({ProductList}) {

    const router = useRouter();

    let searchTerm = router.query.searchItem

    let FilteredList = ProductData.filter(
        data =>
            data.name.includes(searchTerm) ||
            data.brand.brandPe.includes(searchTerm) ||
            data.categoryPe.includes(searchTerm) ||
            data.groupName.includes(searchTerm)
    )

    console.log(FilteredList)

    return (
        <h1> Hello </h1>

    )
}

export async function getStaticPaths() {

    return {
        paths: [
            {params: {searchItem: 'dairyProducts'}}
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