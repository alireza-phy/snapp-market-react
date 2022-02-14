import ProductsFilter from '../ProductsFilter/ProductsFilter'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PaginationAndSort from '../Pagination/Pagination'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ProductData from '../ProductData/ProductData'
import Slider from '@mui/material/Slider'
import {useState} from "react";

const Page4 = ({groupId , categoryName}) => {
    const [data, setData] = useState(ProductData.filter((dairy) => (dairy.categoryEn == categoryName && dairy.groupId == groupId)))
    const [productData, setProductData] = useState([...data])
    const [filter, setFilter] = useState([])
    const [justDiscountState, setJustDiscountState] = useState(false)
    const allPrices = data.map((product) => (
        product.price * (1 - (product.discount / 100))
    ))
    const lowPrice = Math.min(...allPrices)
    const highPrice = Math.max(...allPrices)
    const [ranger, setRange] = useState([lowPrice, highPrice])

    const rangeHandler = (e, newValue) => {
        setRange(newValue)
        setProductData([...data].filter((product) => (
            product.price >= newValue[0] && product.price <= newValue[1]
        )))
    }
    const justDiscount = (e) => {
        setJustDiscountState(!justDiscountState)
        if (justDiscountState) {
            setProductData([...data])
        } else {
            setProductData([...productData].filter((product) => (
                product.discount > 0
            )))
        }

    }
    const priceRange = {
        to: ranger[0],
        from: ranger[1]
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
    const filterRemoveHandler = (id) => {
        setFilter(filter.filter((tag) => tag.id !== id))
    }
    const removeFilterList = () => {
        setFilter([])
    }
    const productFilter = () => {
    }
    console.log(data)
    return (
        <Container sx={{px: {xs: 0, sm: '24px'}}}>
            <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={{xs: 0, sm: 0, md: 3, lg: 3, xl: 3}}>
                <ProductsFilter
                    categories={categories}
                    brands={brands}
                    types={types}
                    filter={filter}
                    priceRange={priceRange}
                    ranger={ranger}
                    lowPrice={lowPrice}
                    highPrice={highPrice}
                    filterRemoveHandler={filterRemoveHandler}
                    removeFilterList={removeFilterList}
                    handleChange={rangeHandler}
                    justDiscount={justDiscount}
                    justDiscountState={justDiscountState}
                />
                <Grid item xs={12} sm={12} md={9} xl={9}>
                    {/*<Breadcrumb productCounter={data.length} category={data[0].categoryPe} group={data[0].groupName}/>*/}
                    <PaginationAndSort productData={productData}/>

                </Grid>
            </Grid>
        </Container>
    )
}
export default Page4