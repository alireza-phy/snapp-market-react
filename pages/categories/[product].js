import { useRouter } from 'next/router' ;
import {useEffect} from 'react'


function categories() {
    const router = useRouter();

        console.log(router.query.product);

    return <h1> hello world: {router.query.product} </h1>
}

export default categories