import ProductsFilter from '../ProductsFilter/ProductsFilter'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Pagination from '../Pagination/Pagination'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

const Page4 = () => {
    return (
        <Container sx={{px: {xs: 0, sm: '24px'}}}>
            <Grid container sx={{direction: 'rtl', mt: 4}} columnSpacing={3}>
                <ProductsFilter/>
                <Grid item xs={12} sm={12} md={9} xl={9}>
                    <Breadcrumb productCounter={} group={'شیر'}/>
                    {/*به product counter باید دیتا بدید تا اون رو بشماره*/}
                    <Pagination/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Page4