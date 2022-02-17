import ProductsFilter from '../ProductsFilter/ProductsFilter'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PaginationAndSort from '../Pagination/Pagination'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ProductData from '../ProductData/ProductData'
import {useState , useEffect} from "react";

const Page4 = ({groupId , categoryName , searchList}) => {
    const [data, setData] = (searchList) ? useState(searchList) : useState(ProductData.filter((dairy) => (dairy.categoryEn === categoryName && dairy.groupId === groupId)))
    const [productData, setProductData] = useState([...data])
    const [filterBrandAndTypes, setFilterBrandAndTypes] = useState([])
    const [avaibale, setAvaible] = useState(false)
    const [discount, setDiscount] = useState(false)
    const getAllBrandsAndAllTypesOfCategories = () => {
        let brandsOfCategoriesPe = []
        let brandsOfCategoriesEn = []
        let tagsOfCategories = []
        let result01 = []
        let result02 = []
        data.map(item => {
            if (!(brandsOfCategoriesPe).includes(item.brand.brandPe)) {
                brandsOfCategoriesPe.push(item.brand.brandPe)
                brandsOfCategoriesEn.push(item.brand.brandEn)
            }
        })
        data
            .filter((tag) => (
                tag.tags.length !== 0
            ))
            .map((tags) => (tags.tags.forEach((tag) => {
                if (!(tagsOfCategories.includes(tag.name))) {
                    tagsOfCategories.push(tag.name)
                }
            })))
        tagsOfCategories
            .map((item) =>
                result02.push({tagName: item, status: false}
                ))
        data.map(product => result02.map(type => (type.tagName === product.tags.includes((tag) => tag.name)) ?
            {...type, tagName: product.tags.includes((tag) => tag.name)} : null))
        brandsOfCategoriesPe.map((item, index) =>
            result01.push({brandPe: item, brandEn: brandsOfCategoriesEn[index], status: false}
            ))
        data.map(product => result01.map(brand => (brand.brandPe === product.brand.brandPe) ?
            {...brand, brandEn: product.brand.brandEn} : null))

        for (let item of result01) {
            if (filterBrandAndTypes.includes(item.brandPe)) item.status = true
        }
        for (let item of result02) {
            if (filterBrandAndTypes.includes(item.tagName)) item.status = true
        }
        return [result01, result02]
    }
    let allBrandsAndAllTypesOfCategories = getAllBrandsAndAllTypesOfCategories()

    const removeFilterList = () => {
        setFilterBrandAndTypes([])
    }
    const defaults = () => {
        setProductData([...data])
    }
    const maxDiscount = () => {
        setProductData([...productData].sort((a, b) => a.discount <= b.discount ? 1 : -1))
    }

    const maxDiscountAmount = () => {
        setProductData([...productData].sort((a, b) =>
            a.price - a.price * (1 - (a.discount / 100)) <= b.price - b.price * (1 - (b.discount / 100)) ? 1 : -1))
    }
    const inexpensiveHandler = () => {
        setProductData([...productData].sort((a, b) => a.price * (1 - (a.discount / 100)) >= b.price * (1 - (b.discount / 100)) ? 1 : -1))
    }

    const expensiveHandler = () => {
        setProductData([...productData].sort((a, b) => a.price * (1 - (a.discount / 100)) <= b.price * (1 - (b.discount / 100)) ? 1 : -1))
    }
    useEffect(() => {
        if (filterBrandAndTypes.length > 0) {
            const found1 = allBrandsAndAllTypesOfCategories[1].map((tag) => tag.tagName).some(r => filterBrandAndTypes.indexOf(r) >= 0)
            const found2 = allBrandsAndAllTypesOfCategories[0].map((tag) => tag.brandPe).some(r => filterBrandAndTypes.indexOf(r) >= 0)
            if (found1 && found2) {
                setProductData([...data]
                    .filter((products) => products.tags.length !== 0)
                    .filter((products) => filterBrandAndTypes.includes(products.brand.brandPe))
                    .filter((products) => products.tags.some((tag)=> filterBrandAndTypes.includes(tag.name)))
                )
            } else if (found1) {
                setProductData([...data]
                    .filter((products) => products.tags.length !== 0)
                    .filter((products) => products.tags.some((tag) => filterBrandAndTypes.includes(tag.name)))
                )
            } else if (found2) {
                setProductData([...data].filter((products) => filterBrandAndTypes.includes(products.brand.brandPe)))
            }
        } else {
            setProductData([...data])
        }
        if (filterBrandAndTypes.includes('فقط کالاهای موجود')) {
            setAvaible(true)
            setProductData([...data].filter((product) => product.inventory.available === true))
        } else if (filterBrandAndTypes.includes('فقط کالاهای تخفیف دار')) {
            setDiscount(true)
            setProductData([...data].filter((product) => product.discount > 0))
        }
    }, [filterBrandAndTypes]);
    console.log(filterBrandAndTypes)
    const allPrices = data.map((product) => (
        product.price * (1 - (product.discount / 100))
    ))
    const lowPrice = Math.min(...allPrices)
    const highPrice = Math.max(...allPrices)
    const [ranger, setRange] = useState([lowPrice, highPrice])
    const priceRange = {
        to: ranger[0],
        from: ranger[1]
    }
    const categories = [
        {id: 1, name: 'شیر تازه'},
        {id: 2, name: 'شیر مدت دار'}
    ]
    return (
        <Container sx={{px: {xs: 0, sm: '24px'}}}>
            <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={{xs: 0, sm: 0, md: 3, lg: 3, xl: 3}}>
                <ProductsFilter
                    categories={categories}
                    brands={allBrandsAndAllTypesOfCategories[0]}
                    types={allBrandsAndAllTypesOfCategories[1]}
                    filterBrandAndTypes={filterBrandAndTypes}
                    setFilterBrandAndTypes={setFilterBrandAndTypes}
                    priceRange={priceRange}
                    ranger={ranger}
                    lowPrice={lowPrice}
                    highPrice={highPrice}
                    removeFilterList={removeFilterList}
                    avaibale={avaibale}
                    discount={discount}
                    setAvaible={setAvaible}
                    setDiscount={setDiscount}

                />
                <Grid item xs={12} sm={12} md={9} xl={9}>
                    <Breadcrumb productCounter={productData.length} category={data[0].categoryPe} group={data[0].groupName}/>
                    <PaginationAndSort defaults={defaults}
                                       maxDiscount={maxDiscount}
                                       maxDiscountAmount={maxDiscountAmount}
                                       inexpensiveHandler={inexpensiveHandler}
                                       expensiveHandler={expensiveHandler}
                                       productData={productData}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Page4