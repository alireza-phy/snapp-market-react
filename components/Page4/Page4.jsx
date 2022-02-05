import ProductsFilter from '../ProductsFilter/ProductsFilter'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Pagination from '../Pagination/Pagination'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ProductData from '../ProductData/ProductData'
import {useState} from "react";
import PN from "persian-number";

const Page4 = () => {
    const [data, setData] = useState(ProductData.filter((dairy) => (dairy.category.categoryEn === 'dairy-product' && dairy.group.groupId === 1)))
    const [filter, setFilter] = useState([])
    const highPrice = PN.convertEnToPe(PN.sliceNumber(Math.max(...data.map((product) => product.price))))
    const lowPrice = PN.convertEnToPe(PN.sliceNumber(Math.min(...data.map((product) => product.price))))
    const priceRange = {
        from: lowPrice,
        to: highPrice
    }
    const categories = [
        {id: 1, name: 'شیر تازه'},
        {id: 2, name: 'شیر مدت دار'}
    ]
    const allBrandsFromData = data.map((product) => (
        {en: product.brand.brandEn, pe: product.brand.brandPe}
    ))
    const removeDubBrands = allBrandsFromData
        .filter((v, i, a) => a.findIndex(t => ['en', 'pe'].every(k => t[k] === v[k])) === i)
    const brands = removeDubBrands.map((product) => ({id: Math.floor(Math.random() * 1000), ...product}))
    const emptyArrayForTypes = []
    const typesFiltered = data.map((product) => (product.tags))
        .filter((tag) => (tag.length !== 0))
        .map((product) => (product.forEach((tag) => (emptyArrayForTypes.push(tag)))))
    const removeIdTypes = emptyArrayForTypes.map((tag) => (tag.name))
    const types = [...new Set(removeIdTypes)]
        .map((tag) => ({tag}))
        .map((tag) => ({id: Math.floor(Math.random() * 1000), ...tag}))
    console.log(brands, types)
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
            <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
                <ProductsFilter
                    categories={categories}
                    brands={brands}
                    types={types}
                    filter={filter}
                    priceRange={priceRange}
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