import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import {useRef, useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import GoldenCard from '../GoldenCard/GoldenCard'

const ProductCategory = ({
                             categoryList,
                             ordinary,
                             special,
                             goldenOffer,
                             children,
                             spTitle,
                             spBlue,
                             spLightBlue,
                             spGreen
                         }) => {

    const blue = 'url(https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png) 0% 0% / cover,linear-gradient(-45deg,rgb(35, 67, 240),rgb(35, 67, 240))'
    const green = 'url(https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png) 0% 0% / cover,linear-gradient(-45deg,rgb(50, 195, 53), rgb(50, 195, 53))'
    const lightBlue = 'url(https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png) 0% 0% / cover,linear-gradient(-45deg,rgb(75, 104, 251), rgb(75, 104, 251))'
    const scroll = useRef(null)
    const [rightVisible, setRightVisible] = useState(false)
    const [leftVisible, setLeftVisible] = useState(true)
    const [seeMoreProducts, setSeeMoreProducts] = useState(true)
    const scrollHandler = (scrollOffset) => {
        let i = 0
        let cancel = setInterval(() => {
            i++;
            if (i < Math.abs(scrollOffset)) {
                scroll.current.scrollLeft -= -30 * scrollOffset / Math.abs(scrollOffset);
            } else {
                clearInterval(cancel)
            }
        }, 0)
    };
    useEffect(() => {
        if (scroll.current.scrollWidth === scroll.current.clientWidth) {
            setRightVisible(false)
            setLeftVisible(false)
        }
        if (scroll.current.childNodes.length < 10) {
            setSeeMoreProducts(false)
        }
        scroll.current.addEventListener('scroll', () => {
            if (ordinary) {
                if (scroll.current.scrollLeft < -50) {
                    setRightVisible(true)
                } else {
                    setRightVisible(false)
                }
            }
            if (special) {
                if (scroll.current.scrollLeft < -150) {
                    setRightVisible(true)
                } else {
                    setRightVisible(false)
                }
            }
            if (goldenOffer) {
                if (scroll.current.scrollLeft < -20) {
                    setRightVisible(true)
                } else {
                    setRightVisible(false)
                }
            }
        })
        scroll.current.addEventListener('scroll', () => {
            if (ordinary) {
                if (scroll.current.scrollLeft < -700) {
                    setLeftVisible(false)
                } else {
                    setLeftVisible(true)
                }
            }
            if (special) {
                if (scroll.current.scrollLeft < -1100) {
                    setLeftVisible(false)
                } else {
                    setLeftVisible(true)
                }
            }
            if (goldenOffer) {
                if (scroll.current.scrollLeft < -240) {
                    setLeftVisible(false)
                } else {
                    setLeftVisible(true)
                }
            }
        })
    }, [children, scroll]);
    return (
        <Box sx={{
            direction: 'rtl',
            position: 'relative',
            my: 4,
        }}>
            {
                ordinary
                &&
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
                                    py: 1.2,
                                    cursor: 'pointer'
                                }}>
                        {categoryList[0].category.categoryPe}
                    </Typography>
                    {
                        seeMoreProducts
                        &&
                        <Typography variant='body1' component='span'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#2446f5',
                                        ml: {xl: 2.5, md: 2.5, xs: 1},
                                        py: 1.2,
                                        cursor: 'pointer'
                                    }}>
                            مشاهده بیشتر
                            <KeyboardArrowLeftIcon/>
                        </Typography>
                    }
                </Paper>
            }
            {
                goldenOffer
                &&
                <Paper variant='outlined' sx={{
                    border: 0, borderRadius: '0.25rem 0.25rem 0 0', backgroundColor: '#228b22'
                }}>
                    <Typography variant='h6' component='h2' sx={{color: '#fff', pr: 1.5, pt: 0.75}}>
                        خرید بیشتر، پرداخت کمتر
                    </Typography>
                </Paper>
            }
            <Paper sx={{
                border: 0, background: special && ((spBlue && blue) || (spLightBlue && lightBlue) || (spGreen && green))
            }} variant='outlined'>
                {
                    special
                    &&
                    <Typography variant='h6' component='h3'
                                sx={{
                                    fontWeight: 700,
                                    display: {md: 'none', xs: 'block'},
                                    alignItems: 'center',
                                    color: '#fff',
                                    ml: 0.5,
                                    mr: 1.5,
                                    pt: 1.25,
                                    pb: 0.5
                                }}>
                        {spTitle}
                    </Typography>
                }
                <Paper ref={scroll} sx={{
                    width: '100%',
                    display: 'flex',
                    flexGrow: '1',
                    overflow: 'auto',
                    whiteSpace: 'nowrap',
                    background: special && ((spBlue && blue) || (spLightBlue && lightBlue) || (spGreen && green)),
                    '::-webkit-scrollbar': {display: 'none'},
                    backgroundColor: goldenOffer && '#228b22',
                    borderTop: ordinary && 0,
                    border: (goldenOffer || special) && 0,
                    borderRadius: goldenOffer ? '0 0 0.25rem 0.25rem' : ordinary ? 0 : 1,
                    px: goldenOffer && 0.75,
                    pb: goldenOffer && 0.35
                }} variant='outlined'>
                    {
                        special
                        &&
                        <Typography variant='h5' component='h3'
                                    sx={{
                                        fontWeight: 700,
                                        display: {md: 'flex', xs: 'none'},
                                        alignItems: 'center',
                                        color: '#fff',
                                        ml: 0.5,
                                        mr: 1.5
                                    }}>
                            {spTitle}
                        </Typography>
                    }
                    {
                        goldenOffer
                        &&
                        <>
                            <GoldenCard category width='17rem'
                            />
                            <GoldenCard category width='17rem'
                            />
                            <GoldenCard category width='17rem'
                            />
                        </>
                    }
                    {
                    (ordinary || special)
                    &&
                    <>
                        {categoryList.map(item =>
                            <ProductCard category
                                         special
                                         width='14.5rem'
                                         src={item.images[0].url}
                                         title={item.name}
                                         price={item.price}
                                         discount={item.discount}
                                         maximumOrder={item.MaximumOrder}
                                         available={item.inventory.available}
                            />
                        )}
                    </>
                    }
                    {
                        ordinary
                        &&
                        seeMoreProducts
                        &&
                        <Paper sx={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: 'center',
                            border: 0,
                            cursor: 'pointer'
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
                                {categoryList.slice(0, 3).map(item =>
                                    <Box component='img' alt=''
                                         src={item.images[0].url}
                                         sx={{
                                             width: '3rem',
                                             opacity: '0.34'
                                         }}/>
                                )}
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
                                {categoryList.slice(3, 6).map(item =>
                                    <Box component='img' alt=''
                                         src={item.images[0].url}
                                         sx={{
                                             width: '3rem',
                                             opacity: '0.34'
                                         }}/>
                                )}
                            </Box>
                        </Paper>
                    }
                    {
                        special
                        &&
                        <Paper sx={{
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            my: 0.75,
                            ml: 1,
                            mr: 0.5,
                            cursor: 'pointer'
                        }} variant='outlined'>
                            <Typography component='p' variant='p' sx={{color: '#2343f0', px: 4}}>
                                مشاهده بیشتر
                            </Typography>
                        </Paper>
                    }
                </Paper>
            </Paper>
            {
                rightVisible
                &&
                <Box onClick={() => scrollHandler(200)} sx={{
                    display: {xl: 'flex', md: 'flex', xs: 'none'},
                    alignItems: 'center',
                    position: 'absolute',
                    top: special ? '50%' : '55%',
                    right: special ? '1%' : '1%',
                    p: 0.7,
                    zIndex: 100,
                    backgroundColor: '#2446f5',
                    borderRadius: '50%',
                    boxShadow: 'rgb(56 88 241 / 45%) 0px 0.5rem 2rem 0.4rem',
                    cursor: 'pointer'
                }}>
                    <ChevronRightIcon
                        sx={{color: '#fff'}}/>
                </Box>
            }
            {
                leftVisible
                &&
                <Box onClick={() => scrollHandler(-200)} sx={{
                    display: {xl: 'flex', md: 'flex', xs: 'none'},
                    alignItems: 'center',
                    position: 'absolute',
                    top: special ? '50%' : '55%',
                    left: special ? '1%' : '1%',
                    p: 0.7,
                    zIndex: 100,
                    backgroundColor: '#2446f5',
                    borderRadius: '50%',
                    boxShadow: 'rgb(56 88 241 / 45%) 0px 0.5rem 2rem 0.4rem',
                    cursor: 'pointer'
                }}>
                    <ChevronLeftIcon
                        sx={{color: '#fff'}}/>
                </Box>
            }
        </Box>

    )
}
export default ProductCategory