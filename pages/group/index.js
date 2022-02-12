import {useRouter} from 'next/router' ;
import React from "react";
import ProductData from '../../components/ProductData/ProductData'
import Page4 from '../../components/Page4/Page4'

export default function group() {

    const router = useRouter();

    return (
        <Page4/>
    )
}