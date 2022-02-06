import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Divider from '@mui/material/Divider'
import {useState, useEffect} from 'react'
import {getCategory} from '../../library/axios/getData';
import ProductData from '../ProductData/ProductData'

const CategoryMenu = ({category}) => {

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
    //         .then(data => setCategoryList(data.products))
    // }, [])

let categoryList = ProductData

    const data = {
        id: 1,
        groups: [
            {id: 1, group: 'شیر'},
            {id: 2, group: 'پنیر'},
            {id: 3, group: 'ماست'},
            {id: 4, group: 'دوغ'},
            {id: 5, group: 'کره'},
            {id: 6, group: 'خامه'},
            {id: 7, group: 'کشک'},
            {id: 8, group: 'بستنی'},
        ]
    }
    return (
        <Grid item xs={12} sm={12} md={3} xl={3} sx={{position: 'relative'}}>
            <Paper variant='outlined' sx={{position: 'sticky', top: 15, py: 1.5, my: {xs: 2.5, sm: 2.5, md: 0, xl: 0}}}>
                <Box sx={{display: {xs: 'none', sm: 'none', md: 'block', xl: 'block'}}}>
                    <Typography variant='h6' component='h3' sx={{fontWeight: 600, mx: 2}}>
                        دسته بندی ها :
                    </Typography>
                    {categoryList.map(item => (
                        <Box key={item.groupId} sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            ':hover': {
                                bgcolor: '#F2F7FF'
                            },
                            ':hover svg': {
                                visibility: 'visible'
                            },
                            borderRadius: 1,
                            my: 1.75,
                            mx: 1,
                            cursor: 'pointer'
                        }}>
                            <Typography variant='body1' component='p'
                                        sx={{py: 0.75, px: 1, fontWeight: 600, color: '#757575'}}>
                                {item.groupName}
                            </Typography>
                            <KeyboardArrowLeftOutlinedIcon sx={{color: 'rgb(117, 117, 117)', visibility: 'hidden'}}/>
                        </Box>
                    ))}
                </Box>
                <Box sx={{display: {xs: 'block', sm: 'block', md: 'none', xl: 'none'}}}>
                    <Box sx={{mx: 2}}>
                        <Box>
                            <Typography variant='h6' component='h3' sx={{fontWeight: 600}}>
                                دسته بندی ها در
                                &nbsp;
                                <Typography variant='h6' component='span' sx={{
                                    fontWeight: 600,
                                    color: '#2446f5'
                                }}>
                                    لبنیات
                                </Typography>
                            </Typography>
                        </Box>
                        <Divider sx={{my: 2}}/>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            overflow: 'auto',
                            whiteSpace: 'nowrap',
                            '::-webkit-scrollbar': {display: 'none'},
                        }}>
                            {data.groups.map((group) => (
                                <Box sx={{
                                    flex: {xs: `0 0 3.7rem`, sm: `0 0 4.45rem`, md: `0 0 4.45rem`, xl: `0 0 4.45rem`},
                                    border: 1,
                                    borderColor: '#2446f5',
                                    borderRadius: 10,
                                    ml: 2,
                                    py: 0.5,
                                }} key={group.id}>
                                    <Typography variant='body1' component='span'
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    color: '#2446f5',
                                                    fontWeight: 600
                                                }}>
                                        {group.group}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}
export default CategoryMenu
