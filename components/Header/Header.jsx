import * as React from 'react';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "./images/back-header.jpg";
import Logo from "./images/logo.png";
import Hyper from "./images/Hyper.jpg"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useTheme, createTheme, makeStyles} from '@mui/material/styles';
import {Container, IconButton, Link, Paper} from "@mui/material";
import {styled, alpha} from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import {
    ShoppingBagOutlined,
    PersonOutline, QueryBuilder, GridViewOutlined, ExpandMore,
} from "@mui/icons-material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SlideDrawer from "./slideDrawer";
import CartDrawer from "./CartDrawer";
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LensIcon from '@mui/icons-material/Lens';
import {keyframes} from '@mui/system';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '37%',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: {md: 970, lg: 1155},
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    px: 3,
    pt: 3
};
const infinityShrinknessCircle = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.5);
    border: 2px solid #fff;
    outline: 3px solid rgb(7, 188, 32)
  }
  100% {
    transform: scale(0.8);
  }
`
//search

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: "5rem",
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: '100%',
    fontSize: "0.8rem",
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(1),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        height: "2rem",
        fontSize: "0.5rem"
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginRight: "1rem"
    },
    [theme.breakpoints.up('md')]: {
        marginRight: "1rem"
    },

}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'rgb(117, 117, 117)',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'black',
    display: "flex",
    alignItems: "center",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20rem',
        }, [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
}));
const firstCol = [
    {
        id: 1, name: "لبنیات", groups: [
            {id: 1, group: 'شیر'},
            {id: 2, group: 'پنیر'},
            {id: 3, group: 'ماست'},
            {id: 4, group: 'دوغ'},
            {id: 5, group: 'کره'},
            {id: 6, group: 'خامه'},
            {id: 7, group: 'کشک'},
            {id: 8, group: 'بستنی'},
        ]
    },
    {
        id: 2, name: 'نوشیدنی', groups: [
            {id: 1, group: 'نوشابه'},
            {id: 2, group: 'ماءالشعیر'},
            {id: 3, group: 'آبمیوه'},
            {id: 4, group: 'چای و دمنوش'},
            {id: 5, group: 'آب'},
            {id: 6, group: 'قهوه و هات چاکلت'},
            {id: 7, group: 'نوشیدنی انرژی زا'},
            {id: 8, group: 'شربت'},
            {id: 9, group: 'عرقیجات'}
        ]
    },
    {
        id: 3, name: 'میوه و سبزیجات تازه', groups: [
            {id: 1, group: 'میوه تازه'},
            {id: 2, group: 'سبزیجات و صیفی جات'}
        ]
    },
    {
        id: 4, name: 'خشکبار، دسر و شیرینی', groups: [
            {id: 1, group: 'دسر'},
            {id: 2, group: 'آجیل'},
            {id: 3, group: 'خرما'},
            {id: 4, group: 'ژله'},
            {id: 5, group: 'خشکبار'},
            {id: 6, group: 'پودر کیک و پنکیک'},
            {id: 7, group: 'انواع شیرینی'}
        ]
    },
    {
        id: 5, name: 'کودک و نوزاد', groups: [
            {id: 1, group: 'مواد غذایی کودک'},
            {id: 2, group: 'بهداشت کودک'},
            {id: 3, group: 'لوازم کودک و نوزاد'},
            {id: 4, group: 'اسباب بازی کودک'}
        ]
    }
]
const secondCol = [
    {
        id: 1, name: "خواربار و نان", groups: [
            {id: 1, group: 'روغن'},
            {id: 2, group: 'ماکارونی و لازانیا و رشته'},
            {id: 3, group: 'رب'},
            {id: 4, group: 'حبوبات و سویا'},
            {id: 5, group: 'انواع نان'},
            {id: 6, group: 'برنج'},
            {id: 7, group: 'قند و شکر و نبات'},
            {id: 8, group: 'پودر سوخاری و آرد'},
            {id: 9, group: 'غلات'},
            {id: 10, group: 'انواع خمیر'}
        ]
    },
    {
        id: 2, name: 'مواد پروتئینی', groups: [
            {id: 1, group: 'تخم مرغ'},
            {id: 2, group: 'مرغ'},
            {id: 3, group: 'گوشت قرمز'},
            {id: 4, group: 'ماهی و میگو'},
            {id: 5, group: 'سوسیس و کالباس'}
        ]
    },
    {
        id: 3, name: 'کنسرو و غذای آماده', groups: [
            {id: 1, group: 'فرآورده های منجمد یخچالی'},
            {id: 2, group: 'تن ماهی'},
            {id: 3, group: 'غذای نیمه آماده'},
            {id: 4, group: 'کنسرو و کمپوت'},
            {id: 5, group: 'غذای آماده مصرف'}
        ]
    },
    {
        id: 4, name: 'خانه و سبک زندگی', groups: [
            {id: 1, group: 'لوازم آشپزخانه'},
            {id: 2, group: 'لوازم یکبار مصرف'},
            {id: 3, group: 'لوازم خانه'},
            {id: 4, group: 'کالای حمام و سرویس بهداشتی'},
            {id: 5, group: 'ابزار و آلات و یراق آلات'},
            {id: 6, group: 'باغبانی'},
            {id: 7, group: 'گردش و سفر'},
            {id: 8, group: 'کالای سلامت'},
            {id: 9, group: 'ورزش و بازی'},
            {id: 10, group: 'خودرو، موتور سیکلت و دوچرخه'},
            {id: 11, group: 'لوازم جشن و کادو'},
            {id: 12, group: 'لوازم التحریر و اداری'}
        ]
    },
]
const thirdCol = [
    {
        id: 1, name: "دستمال و شوینده", groups: [
            {id: 1, group: 'دستمال کاغذی'},
            {id: 2, group: 'دستمال حوله ای'},
            {id: 3, group: 'دستمال توالت'},
            {id: 4, group: 'نظافت خانه و آشپزخانه'},
            {id: 5, group: 'پاک کننده و ضد عفونی کننده سرویس بهداشتی'},
            {id: 6, group: 'شستشوی ظروف'},
            {id: 7, group: 'شستشوی لباس'},
            {id: 8, group: 'فوم و مایع دستشویی'},
            {id: 9, group: 'ضدعفونی کننده سطوح و میوه'}
        ]
    },
    {
        id: 2, name: 'آرایشی و بهداشتی', groups: [
            {id: 1, group: 'محصولات آرایشی'},
            {id: 2, group: 'بهداشت و مراقبت صورت'},
            {id: 3, group: 'شامپو و مراقبت مو'},
            {id: 4, group: 'آرایش مو'},
            {id: 5, group: 'بهداشت و مراقبت بدن'},
            {id: 6, group: 'بهداشت دهان'},
            {id: 7, group: 'اصلاح صورت و بدن'},
            {id: 8, group: 'بهداشت جنسی'},
            {id: 9, group: 'اسپری و ضدتعریق'}
        ]
    },
    {
        id: 3, name: 'صبحانه', groups: [
            {id: 1, group: 'عسل'},
            {id: 2, group: 'مربا'},
            {id: 3, group: 'حلوا ارده و شیره'},
            {id: 4, group: 'شکلات صبحانه'},
            {id: 5, group: 'غلات صبحانه'},
            {id: 6, group: 'کره بادام زمینی'}
        ]
    },
    {
        id: 4, name: 'لوازم برقی و دیجیتال', groups: [
            {id: 1, group: 'باتری، محافظ و رابط'},
            {id: 2, group: 'نور و روشنایی'},
            {id: 3, group: 'لوازم برقی خانه'},
            {id: 4, group: 'لوازم برقی آشپزخانه'}
        ]
    },
]
const forthCol = [
    {
        id: 1, name: "تنقلات", groups: [
            {id: 1, group: 'بیسکویت و ویفر'},
            {id: 2, group: 'چیپس'},
            {id: 3, group: 'کیک و کلوچه'},
            {id: 4, group: 'پفک و اسنک'},
            {id: 5, group: 'شکلات و آبنبات'},
            {id: 6, group: 'پاستیل و آدامس'},
            {id: 7, group: 'آجیل تک و مغز آجیل'},
            {id: 8, group: 'پاپ کورن و گندمک'},
            {id: 9, group: 'آلوچه و لواشک'}
        ]
    },
    {
        id: 2, name: 'چاشنی و افزودنی', groups: [
            {id: 1, group: 'سس'},
            {id: 2, group: 'ادویه'},
            {id: 3, group: 'خیارشور و زیتون'},
            {id: 4, group: 'آبلیمو و سرکه و آبغوره'},
            {id: 5, group: 'ترشی و شور'},
            {id: 6, group: 'افزودنی های شیرینی پزی'},
            {id: 7, group: 'زعفران'},
            {id: 8, group: 'سبزیجات خشک و سرخ شده'},
            {id: 9, group: 'سایر افزودنی ها'}
        ]
    }
]
const Header = ({
                    drawerOpen,
                    drawerOpenCart,
                    toggleDrawer,
                    toggleDrawerCart,
                    value,
                    handleChange,
                    slideDrawerModal
                }) => {
    const theme = useTheme();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'column', height: "20rem",
                    backgroundImage: `url(${Image.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 20rem",
                    [theme.breakpoints.down('sm')]: {
                        height: "15rem"
                    },
                    [theme.breakpoints.between('sm', 'md')]: {
                        height: "14rem"
                    },
                    [theme.breakpoints.up('md')]: {
                        height: "12.5rem"
                    },
                }}>
                    <Container>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid rgba(250, 251, 252,0.1)',
                            width: '100%',
                            marginTop: "1rem",
                            [theme.breakpoints.down('sm')]: {
                                marginTop: "0",
                            },
                            [theme.breakpoints.between('sm', 'md')]: {
                                marginTop: "0.8rem"
                            },
                            [theme.breakpoints.up('md')]: {
                                marginTop: "0.2rem"
                            },
                        }}>
                            <Box sx={{display: 'flex', alignItems: "center", gap: 2}}>

                                <Box sx={{
                                    width: "5rem", height: "5rem",
                                    [theme.breakpoints.down('sm')]: {
                                        width: "3rem", height: "3rem",
                                    },

                                    [theme.breakpoints.up('sm')]: {
                                        width: "4rem", height: "4rem",
                                    },

                                }}>
                                    <img
                                        style={{
                                            width: "3.5rem", height: "3.5rem",
                                        }}
                                        src={Logo.src}
                                        alt="اسنپ مارکت"
                                    />
                                </Box>
                                <Button underline="none" sx={{textOverflow: "ellipsis"}}>
                                    <Box sx={{
                                        width: '0.5rem',
                                        height: '0.5rem',
                                        mx: 1.5,
                                        backgroundColor: 'rgb(7, 188, 32)',
                                        borderRadius: '50%',
                                        animation: `${infinityShrinknessCircle} 1.4s ease 0s infinite`,
                                    }}/>
                                    <Typography sx={{
                                        fontSize: "1.7rem", display: "flex", alignItems: "center", color: "white",
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: "0.7rem", textOverflow: 'ellipsis',
                                        },
                                        [theme.breakpoints.between('sm', 'md')]: {
                                            fontSize: "0.8rem"
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: "1rem"
                                        },
                                    }}>
                                        ابتدا آدرس خود را انتخاب کنید
                                    </Typography>
                                </Button>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: "center", marginBottom: "0.8rem",
                                [theme.breakpoints.between('sm', 'md')]: {
                                    marginBottom: "0.4rem"
                                },
                                [theme.breakpoints.up('md')]: {
                                    marginBottom: "0"
                                },
                            }}>
                                <Button variant="outlined" sx={{
                                    fontSize: "2rem", border: "none",
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: "1.2rem"
                                    },
                                }}>
                                    <IconButton aria-label="login" size="5rem">
                                        <PersonOutline sx={{
                                            color: "white",
                                            [theme.breakpoints.down('sm')]: {
                                                fontSize: "1.6rem"
                                            }
                                        }}/>
                                    </IconButton>
                                    <Typography
                                        sx={{display: {xs: "none", sm: "flex"}, overflow: "auto", color: "white"}}>
                                        ورود / عضویت
                                    </Typography>
                                </Button>
                                <Box sx={{display: {xs: "none", sm: "flex"},}}>
                                    <Button onClick={() => toggleDrawerCart(true)}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                backgroundColor: "white",
                                                color: "blue",
                                                border: "none",
                                                width: "12rem",
                                                fontSize: "1.4rem",
                                                height: "3rem",
                                                fontWeight: 600,
                                                [theme.breakpoints.between('sm', 'md')]: {
                                                    width: "8rem",
                                                    height: "2.5rem",
                                                    fontSize: "0.8rem",
                                                    padding: "0 1rem"
                                                },
                                                [theme.breakpoints.up('md')]: {
                                                    fontSize: "1rem",
                                                    width: "10rem",
                                                    height: "2.5rem",
                                                },
                                            }}
                                            variant="contained" startIcon={<ShoppingBagOutlined/>}
                                            size="large"
                                    >
                                        سبد خرید
                                        <Typography sx={{
                                            width: "0.7rem",
                                            height: "0.7rem",
                                            borderRadius: "50%",
                                            fontSize: "0.4rem",
                                            backgroundColor: "lightblue",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            [theme.breakpoints.up('md')]: {
                                                width: "1rem",
                                                height: "1rem",
                                            },
                                        }}>
                                            0
                                        </Typography>
                                    </Button>
                                    <CartDrawer openCart={drawerOpenCart} onCloseCart={toggleDrawerCart}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex', justifyContent: 'space-between', width: "100%", marginTop: "1rem",
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                                borderBottom: '1px solid rgba(250, 251, 252,0.1)',
                                alignItems: 'flex-start',
                                paddingBottom: "0.9rem"
                            },
                            [theme.breakpoints.between('sm', 'md')]: {
                                marginTop: "0.8rem"

                            },
                        }}>
                            <Box sx={{
                                display: 'flex', alignItems: "center",
                                [theme.breakpoints.down('sm')]: {
                                    marginBottom: "0.5rem",
                                    order: "1"
                                },
                            }}>
                                <Box sx={{display: 'flex', alignItems: "center",}}>
                                    <Box sx={{
                                        width: "5rem", height: "5rem",
                                        [theme.breakpoints.down('sm')]: {
                                            width: "2rem", height: "2rem",
                                        },
                                        [theme.breakpoints.between('sm', 'md')]: {
                                            width: "3rem", height: "3rem"
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            width: "3rem", height: "3rem"
                                        },

                                    }}>
                                        <img style={{
                                            width: "3rem", height: "3rem", borderRadius: "50%"
                                        }}
                                             src={Hyper.src}
                                             alt="هایپر استار"
                                        />
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        marginRight: '0.5rem',
                                        gap: '0.5rem',
                                        fontSize: "2rem",
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '0.7rem',
                                        },
                                        [theme.breakpoints.between('sm', 'md')]: {
                                            fontSize: "1rem",
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: "1.3rem",
                                        },
                                    }}>
                                        <Typography sx={{display: {xs: "none", sm: "flex"}}}> خرید از </Typography>
                                        <Typography sx={{fontWeight: 600}}> هایپراستار صبا </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Button sx={{
                                        padding: 0,
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        width: "10rem",
                                        backgroundColor: "white",
                                        color: "blue",
                                        borderRadius: "20rem",
                                        marginRight: "2rem",
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '0.5rem',
                                            width: "5.5rem",
                                            height: "1.5rem",
                                        },
                                        [theme.breakpoints.between('sm', 'md')]: {
                                            fontSize: "0.6rem",
                                            width: "6.5rem",
                                            borderRadius: "10rem",
                                            height: "1.5rem",

                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: "0.6rem",
                                            width: "6.5rem",
                                            borderRadius: "10rem",
                                            height: "1.5rem",
                                        },
                                    }} variant="contained" endIcon={<ExpandMore sx={{fontSize: "0.2rem"}}/>}>
                                        تغییر فروشگاه
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                [theme.breakpoints.down('sm')]: {
                                    marginLeft: '0', order: "2"

                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    marginTop: "1rem"

                                },
                            }}>

                                <QueryBuilder sx={{
                                    display: {xs: "none", sm: "flex"}, fontSize: "large",
                                    marginLeft: "0.6rem",
                                    [theme.breakpoints.between('sm', 'md')]: {
                                        fontSize: "1.4rem",
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: "1.5rem",
                                        marginLeft: "0.5rem"
                                    }
                                }}/>
                                <Typography sx={{
                                    display: "flex", alignItems: "center", fontSize: "1.5rem",
                                    fontWeight: 600,
                                    marginLeft: "6rem",
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: '0.7rem',
                                        marginTop: "0.8rem"
                                    },
                                    [theme.breakpoints.between('sm', 'md')]: {
                                        fontSize: "0.7rem",
                                    },

                                    [theme.breakpoints.up('md')]: {
                                        fontSize: "1rem"
                                    },

                                }}>

                                    تحویل از امروز ساعت 11

                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex', width: '100%', justifyContent: "flex-start", marginTop: "2rem",
                            [theme.breakpoints.between('sm', 'md')]: {
                                marginTop: "1.6rem"
                            },
                            [theme.breakpoints.up('md')]: {
                                marginTop: "1rem"
                            },
                        }}>
                            <Button onClick={() => toggleDrawer(true)}
                                    variant="contained" sx={{
                                display: {xs: "none", sm: "flex"},
                                width: "10rem",
                                height: "3rem",
                                backgroundColor: "white",
                                color: "black",
                                fontSize: "1rem",
                                justifyContent: "center",
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: "0.8rem",
                                    width: "8rem",
                                    height: "2.6rem",
                                },
                                [theme.breakpoints.up('md')]: {
                                    width: "7.5rem",
                                    height: "2.4rem",
                                    fontSize: "0.8rem"
                                }

                            }}>
                                <GridViewOutlined sx={{fontSize: "1rem",}}/>

                                دسته بندی ها
                            </Button>
                            <SlideDrawer slideDrawerModal={slideDrawerModal} open={drawerOpen}
                                         onClose={() => toggleDrawer(false)}/>
                            <Modal
                                sx={{display: {xs: 'none', md: 'block'}}}
                                open={drawerOpen}
                                onClose={() => toggleDrawer(false)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Box sx={{display: 'flex', gap: {md: 11.5, lg: 19}}}>
                                        <Box>
                                            <List>
                                                {
                                                    firstCol.map((list) => (
                                                        <ListItem sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'start',
                                                            mb: 1.5,
                                                            cursor: 'pointer',
                                                            ':hover div span svg': {
                                                                color: '#2446f5',
                                                                opacity: 1,
                                                                fontSize: 10
                                                            },
                                                            ':hover div p': {
                                                                color: '#07bc20'
                                                            }
                                                        }} disablePadding>
                                                            <ListItemText sx={{
                                                                textAlign: 'right',
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}
                                                                          primary={
                                                                              <Typography sx={{
                                                                                  display: 'flex',
                                                                                  alignItems: 'center',
                                                                                  gap: 1,
                                                                                  color: '#2446f5',
                                                                                  fontWeight: 500
                                                                              }}
                                                                                          variant="body2"
                                                                                          component="span">
                                                                                  <Box sx={{width: 8}}>
                                                                                      <LensIcon
                                                                                          sx={{
                                                                                              fontSize: 6,
                                                                                              opacity: 0.5
                                                                                          }}/>
                                                                                  </Box>
                                                                                  {list.name}
                                                                              </Typography>}/>
                                                            <ListItemText sx={{textAlign: 'right', mr: 1}}>
                                                                <Typography
                                                                    variant="body2"
                                                                    component="p"
                                                                    sx={{
                                                                        textOverflow: 'ellipsis',
                                                                        overflow: 'hidden',
                                                                        height: 20,
                                                                        width: 150,
                                                                        whiteSpace: 'nowrap',
                                                                        color: '#a3a3a3'
                                                                    }}
                                                                >
                                                                    {
                                                                        list.groups.map((groups) => (
                                                                            <Typography variant="body2"
                                                                                        component="span">
                                                                                {groups.group}،&nbsp;
                                                                            </Typography>
                                                                        ))
                                                                    }
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                        </Box>
                                        <Box>
                                            <List>
                                                {
                                                    secondCol.map((list) => (
                                                        <ListItem sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'start',
                                                            mb: 1.5,
                                                            cursor: 'pointer',
                                                            ':hover div span svg': {
                                                                color: '#2446f5',
                                                                opacity: 1,
                                                                fontSize: 10
                                                            },
                                                            ':hover div p': {
                                                                color: '#07bc20'
                                                            }
                                                        }} disablePadding>
                                                            <ListItemText sx={{
                                                                textAlign: 'right',
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}
                                                                          primary={
                                                                              <Typography sx={{
                                                                                  display: 'flex',
                                                                                  alignItems: 'center',
                                                                                  gap: 1,
                                                                                  color: '#2446f5',
                                                                                  fontWeight: 500
                                                                              }}
                                                                                          variant="body2"
                                                                                          component="span">
                                                                                  <Box sx={{width: 8}}>
                                                                                      <LensIcon
                                                                                          sx={{
                                                                                              fontSize: 6,
                                                                                              opacity: 0.5
                                                                                          }}/>
                                                                                  </Box>
                                                                                  {list.name}
                                                                              </Typography>}/>
                                                            <ListItemText sx={{textAlign: 'right', mr: 1}}>
                                                                <Typography
                                                                    variant="body2"
                                                                    component="p"
                                                                    sx={{
                                                                        textOverflow: 'ellipsis',
                                                                        overflow: 'hidden',
                                                                        height: 20,
                                                                        width: 150,
                                                                        whiteSpace: 'nowrap',
                                                                        color: '#a3a3a3'
                                                                    }}
                                                                >
                                                                    {
                                                                        list.groups.map((groups) => (
                                                                            <Typography variant="body2"
                                                                                        component="span">
                                                                                {groups.group}،&nbsp;
                                                                            </Typography>
                                                                        ))
                                                                    }
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                        </Box>
                                        <Box>
                                            <List>
                                                {
                                                    thirdCol.map((list) => (
                                                        <ListItem sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'start',
                                                            mb: 1.5,
                                                            cursor: 'pointer',
                                                            ':hover div span svg': {
                                                                color: '#2446f5',
                                                                opacity: 1,
                                                                fontSize: 10
                                                            },
                                                            ':hover div p': {
                                                                color: '#07bc20'
                                                            }
                                                        }} disablePadding>
                                                            <ListItemText sx={{
                                                                textAlign: 'right',
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}
                                                                          primary={
                                                                              <Typography sx={{
                                                                                  display: 'flex',
                                                                                  alignItems: 'center',
                                                                                  gap: 1,
                                                                                  color: '#2446f5',
                                                                                  fontWeight: 500
                                                                              }}
                                                                                          variant="body2"
                                                                                          component="span">
                                                                                  <Box sx={{width: 8}}>
                                                                                      <LensIcon
                                                                                          sx={{
                                                                                              fontSize: 6,
                                                                                              opacity: 0.5
                                                                                          }}/>
                                                                                  </Box>
                                                                                  {list.name}
                                                                              </Typography>}/>
                                                            <ListItemText sx={{textAlign: 'right', mr: 1}}>
                                                                <Typography
                                                                    variant="body2"
                                                                    component="p"
                                                                    sx={{
                                                                        textOverflow: 'ellipsis',
                                                                        overflow: 'hidden',
                                                                        height: 20,
                                                                        width: 150,
                                                                        whiteSpace: 'nowrap',
                                                                        color: '#a3a3a3'
                                                                    }}
                                                                >
                                                                    {
                                                                        list.groups.map((groups) => (
                                                                            <Typography variant="body2"
                                                                                        component="span">
                                                                                {groups.group}،&nbsp;
                                                                            </Typography>
                                                                        ))
                                                                    }
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                        </Box>
                                        <Box>
                                            <List sx={{position: 'relative'}}>
                                                {
                                                    forthCol.map((list) => (
                                                        <ListItem sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'start',
                                                            mb: 1.5,
                                                            cursor: 'pointer',
                                                            ':hover div span svg': {
                                                                color: '#2446f5',
                                                                opacity: 1,
                                                                fontSize: 10
                                                            },
                                                            ':hover div p': {
                                                                color: '#07bc20'
                                                            }
                                                        }} disablePadding>
                                                            <ListItemText sx={{
                                                                textAlign: 'right',
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}
                                                                          primary={
                                                                              <Typography sx={{
                                                                                  display: 'flex',
                                                                                  alignItems: 'center',
                                                                                  gap: 1,
                                                                                  color: '#2446f5',
                                                                                  fontWeight: 500
                                                                              }}
                                                                                          variant="body2"
                                                                                          component="span">
                                                                                  <Box sx={{width: 8}}>
                                                                                      <LensIcon
                                                                                          sx={{
                                                                                              fontSize: 6,
                                                                                              opacity: 0.5
                                                                                          }}/>
                                                                                  </Box>
                                                                                  {list.name}
                                                                              </Typography>}/>
                                                            <ListItemText sx={{textAlign: 'right', mr: 1}}>
                                                                <Typography
                                                                    variant="body2"
                                                                    component="p"
                                                                    sx={{
                                                                        textOverflow: 'ellipsis',
                                                                        overflow: 'hidden',
                                                                        height: 20,
                                                                        width: 150,
                                                                        whiteSpace: 'nowrap',
                                                                        color: '#a3a3a3'
                                                                    }}
                                                                >
                                                                    {
                                                                        list.groups.map((groups) => (
                                                                            <Typography variant="body2"
                                                                                        component="span">
                                                                                {groups.group}،&nbsp;
                                                                            </Typography>
                                                                        ))
                                                                    }
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    ))
                                                }
                                                <Box component='img'
                                                     src='https://snapp.market/v2/static/images/148e245e46b7c25e27d495d71b214277.png'
                                                     sx={{
                                                         width: 201,
                                                         float: 'left',
                                                         position: 'absolute',
                                                         right: -20,
                                                         mt: 7
                                                     }}
                                                />
                                            </List>
                                        </Box>
                                    </Box>
                                </Box>
                            </Modal>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="جست و جوی برند یا محصول"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Paper sx={{display: {xs: "flex", sm: "none"}, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}}
                   elevation={3}>
                <BottomNavigation sx={{width: "100%", color: "black"}} showLabels value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="خانه"
                        value="خانه"
                        icon={<HomeOutlinedIcon/>}
                    />
                    <BottomNavigationAction
                        label="دسته بندی ها"
                        value="دسته بندی ها"
                        icon={<GridViewOutlined/>}
                        onClick={() => toggleDrawer(true)}
                    />
                    <SlideDrawer open={drawerOpen} onClose={toggleDrawer}/>

                    <BottomNavigationAction
                        label="سبد خرید"
                        value="سبد خرید"
                        icon={
                            <Badge anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                                   badgeContent={1}
                                   color="primary">
                                <ShoppingCartOutlinedIcon color="action"/>
                            </Badge>
                        }
                    />
                </BottomNavigation>
            </Paper>
        </>
    );
};

export default Header;