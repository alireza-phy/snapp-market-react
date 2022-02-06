import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import {useEffect, useState} from "react";
import {getCategory} from '../../library/axios/getData';
import ProductData from '../ProductData/ProductData'

const Breadcrumb = ({productCounter, group, category}) => {

    // const [categoryList, setCategoryList] = useState([{
    //     id: 1,
    //     name: '',
    //     brand: {
    //         brandEn: '',
    //         brandPe: '',
    //     },
    //     images: [
    //         {
    //             id: 1,
    //             url: ''
    //         },
    //         {
    //             id: 2,
    //             url: ''
    //         },
    //     ],
    //     categoryEn: '',
    //     categoryPe: '',
    //     groupId: 1,
    //     groupName: '',
    //     inventory: {
    //         available: true,
    //         quantity: 0,
    //     },
    //     seller: '',
    //     tags: [
    //         {id: 1, name: ''},
    //         {id: 2, name: ''}
    //     ],
    //     price: 0,
    //     discount: 0,
    //     MaximumOrder: 0
    // }]);
    //
    //
    // useEffect(() => {
    //     getCategory(category)
    //         .then(data => setCategoryList(data.products.slice(0, 9)))
    // }, [])

    let categoryList = ProductData.filter(item => item.categoryEn === category)
    console.log(categoryList)
    return (
        <Paper variant='outlined'
               sx={{
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   px: 1.5, py: 2,
                   mb: {xs: 6, sm: 2, md: 2, xl: 2},
               }}>
            <Box sx={{display: 'flex'}}>
                <Box sx={{display: 'flex', cursor: 'pointer'}}>
                    <HomeOutlinedIcon sx={{fontSize: 20, fontWeight: 500, ml: 0.5, color: '#404040'}}/>
                    <Typography component='span' variant='body1' sx={{color: '#404040'}}>
                        اسنپ مارکت
                    </Typography>
                </Box>
                <KeyboardArrowLeftOutlinedIcon sx={{color: 'gray', mx: 0.25}}/>
                <Typography component='span' variant='body1'
                            sx={{fontWeight: group ? 500 : 600, cursor: group && 'pointer'}}>
                    {/*{categoryList[0].categoryPe}*/}
                    الکی
                </Typography>
                {
                    group
                    &&
                    <>
                        <KeyboardArrowLeftOutlinedIcon sx={{color: 'gray', mx: 0.25}}/>
                        <Typography component='span' variant='body1' sx={{fontWeight: 600}}>
                            {group}
                        </Typography>
                    </>
                }
            </Box>
            <Box>
                {
                    productCounter
                    &&
                    <Typography variant='body2' component='p'> {productCounter} کالا </Typography>
                }
            </Box>
        </Paper>
    )
}
export default Breadcrumb