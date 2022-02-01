import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import ProductCard from "../ProductCard/ProductCard";
import {useRef, useEffect, useState} from "react";

const ProductsCategory = () => {
    const scroll = useRef(null)
    const [rightVisible, setRightVisible] = useState(false)
    const [leftVisible, setLeftVisible] = useState(true)
    const scrollHandler = (scrollOffset) => {
        let i = 0
        let cancel = setInterval(() => {
            i++;
            if (i < Math.abs(scrollOffset)) {
                scroll.current.scrollLeft -= -26 * scrollOffset / Math.abs(scrollOffset);
            } else {
                clearInterval(cancel)
            }
        }, 0)
    };
    useEffect(() => {
        scroll.current.addEventListener('scroll', () => {
            if (scroll.current.scrollLeft < -50) {
                setRightVisible(true)
            } else {
                setRightVisible(false)
            }
        })
        scroll.current.addEventListener('scroll', () => {
            if (scroll.current.scrollLeft < -700) {
                setLeftVisible(false)
            } else {
                setLeftVisible(true)
            }
        })
    }, []);

    return (
        <Box sx={{
            direction: 'rtl',
            position: 'relative',
        }}>
            <Paper sx={{
                borderRadius: '0.5rem 0.5rem 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
                   variant='outlined'>
                <Typography variant='body1' component='span'
                            sx={{
                                borderBottom: 2.5,
                                color: '#404040',
                                borderColor: '#2446f5',
                                mr: 2.5,
                                py: 1.2
                            }}>
                    لبنیات
                </Typography>
                <Typography variant='body1' component='span'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#2446f5',
                                ml: {xl: 2.5, md: 2.5, xs: 1},
                                py: 1.2
                            }}>
                    مشاهده بیشتر
                    <KeyboardArrowLeftIcon/>
                </Typography>
            </Paper>
            <Paper ref={scroll} sx={{
                width: '100%',
                display: 'flex',
                flexGrow: '1',
                overflow: 'auto',
                whiteSpace: 'nowrap',
                '::-webkit-scrollbar': {display: 'none'},
                borderTop: 0,
                borderRadius: 0
            }} variant='outlined'>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122727.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122727.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122727.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <ProductCard category ordinary width='13rem'
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'/>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: 'center',
                    border: 0,
                }}
                       variant='outlined' square>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        borderBottom: 1,
                        borderColor: 'grey.200',
                        flexGrow: 3,
                        py: 1.75,
                    }}>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{width: '3rem', filter: 'sepia(80%) blur(0.75px)'}}/>
                        <Divider orientation="vertical" variant="middle"/>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{
                                 width: '3rem',
                                 filter: 'sepia(80%) blur(1px)'
                             }}/>
                        <Divider orientation="vertical" variant="middle"/>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{width: '3rem', filter: 'sepia(80%) blur(0.75px)'}}/>
                    </Box>
                    <Box sx={{flexGrow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography sx={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2446f5'
                        }} variant='body1' component='p'>
                            نمایش همه
                            <ChevronLeftIcon/>
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        borderTop: 1,
                        borderColor: 'grey.200',
                        flexGrow: 3,
                        py: 1.75,
                    }}>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{width: '3rem', filter: 'sepia(80%) blur(0.75px)'}}/>
                        <Divider orientation="vertical" variant="middle"/>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{
                                 width: '3rem',
                                 filter: 'sepia(80%) blur(0.75px)'
                             }}/>
                        <Divider orientation="vertical" variant="middle"/>
                        <Box component='img' alt=''
                             src='https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
                             sx={{width: '3rem', filter: 'sepia(80%) blur(1px)'}}/>
                    </Box>
                </Paper>
            </Paper>
            {rightVisible && <Box onClick={() => scrollHandler(200)} sx={{
                display: {xl: 'flex', md: 'flex', xs: 'none'},
                alignItems: 'center',
                position: 'absolute',
                top: '55%',
                right: '1%',
                p: 0.7,
                zIndex: 100,
                backgroundColor: '#2446f5',
                borderRadius: '50%',
                boxShadow: 'rgb(56 88 241 / 45%) 0px 0.5rem 2rem 0.4rem'
            }}>
                <ChevronRightIcon
                    sx={{color: '#fff'}}/>
            </Box>}
            {leftVisible && <Box onClick={() => scrollHandler(-200)} sx={{
                display: {xl: 'flex', md: 'flex', xs: 'none'},
                alignItems: 'center',
                position: 'absolute',
                top: '55%',
                left: '1%',
                p: 0.7,
                zIndex: 100,
                backgroundColor: '#2446f5',
                borderRadius: '50%',
                boxShadow: 'rgb(56 88 241 / 45%) 0px 0.5rem 2rem 0.4rem',
            }}>
                <ChevronLeftIcon
                    sx={{color: '#fff'}}/>
            </Box>}

        </Box>

    )
}
export default ProductsCategory