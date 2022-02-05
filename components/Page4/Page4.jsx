import ProductsFilter from '../ProductsFilter/ProductsFilter'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Pagination from '../Pagination/Pagination'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ProductData from '../ProductData/ProductData'
import {useState} from "react";

const Page4 = () => {
    const [data, setData] = useState(ProductData)
    const [filter, setFilter] = useState([])
    const categories = [
        {id: 1, name: 'شیر تازه'},
        {id: 2, name: 'شیر مدت دار'}
    ]
    const brands = [
        {id: 1, name: 'البحر'},
        {id: 2, name: 'به تک'},
        {id: 3, name: 'پاک'},
        {id: 4, name: 'پاکبان'},
        {id: 5, name: 'پگاه'},
        {id: 6, name: 'دامدارن'},
        {id: 7, name: 'دنت'},
        {id: 8, name: 'دومینو'},
        {id: 9, name: 'رامک'},
        {id: 10, name: 'روزانه'},
        {id: 11, name: 'سحر'},
        {id: 12, name: 'عالیس'},
        {id: 13, name: 'کاله'},
        {id: 14, name: 'مانداسوی'},
        {id: 15, name: 'مانیزان'},
        {id: 16, name: 'میلکی سیپ'},
        {id: 17, name: 'میهن'},
        {id: 18, name: 'نیچر لین'},
        {id: 19, name: 'هراز'}
    ]
    const types = [
        {id: 1, name: 'ساده'},
        {id: 2, name: 'توت فرنگی'},
        {id: 3, name: 'پرچرب'},
        {id: 4, name: 'کم چرب'},
        {id: 5, name: 'طالبی'},
        {id: 6, name: 'موز'},
        {id: 7, name: 'نیم چرب'},
        {id: 8, name: 'کاکائو'},
        {id: 9, name: 'نی شیر'},
        {id: 10, name: 'شیر سویا'}
    ]
    const priceRange = {
        from: '',
        to: ''
    }
    const filterRemoveHandler = (id) => {
        setFilter(filter.filter((tag) => tag.id !== id))
    }
    const removeFilterList = () => {
        setFilter([])
    }
    const productFilter = () => {

    }

    return (
        <Container sx={{px: {xs: 0, sm: '24px'}}}>
            <div onClick={productFilter}>
                hi
            </div>
            <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
                <ProductsFilter
                    categories={categories}
                    brands={brands}
                    types={types}
                    filter={filter}
                    filterRemoveHandler={filterRemoveHandler}
                    removeFilterList={removeFilterList}
                />
                <Grid item xs={12} sm={12} md={9} xl={9}>
                    <Breadcrumb productCounter={data.length} group={'شیر'}/>
                    <Pagination productData={data}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Page4
// const [categories, setCategories] = useState([])
// const [brands, setBrands] = useState([])
// const [types, setTypes] = useState([])
// const [priceRange, setPriceRange] = useState({
//     from: '',
//     to: ''
// })