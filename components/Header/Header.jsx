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
    PersonOutline,
    LocationOnOutlined, QueryBuilder, GridViewOutlined, ExpandMore,
} from "@mui/icons-material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SlideDrawer from "./slideDrawer";
import CartDrawer from "./CartDrawer";

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

const Header = () => {

    const theme = useTheme();
    const [value, setValue] = useState('Home');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    //Drawer Category
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    };
    // Drawer Cart
    const [drawerOpenCart, setDrawerOpenCart] = useState(false);
    const toggleDrawerCart = (value) => {
        setDrawerOpenCart(value)
    };


    return (
        <>
            <AppBar position="static">

                <Toolbar  sx={{
                    display: 'flex',
                    flexDirection: 'column', height: "20rem",
                    backgroundImage: `url(${Image})`,
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
                        height: "14rem"
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

                        <Box sx={{display: 'flex', alignItems: "center"}}>

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
                                    src={Logo}
                                    alt="اسنپ مارکت"
                                />
                            </Box>

                            <Button underline="none" sx={{textOverflow: "ellipsis"}}>
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

                                    {/*<IconButton>*/}
                                    {/*    <LocationOnOutlined sx={{color: "white", fontSize: "1rem"}}/>*/}
                                    {/*</IconButton>*/}
                                    ابتدا آدرس خود را انتخاب کنید

                                    {/*<ExpandMore/>*/}

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

                                <Typography sx={{display: {xs: "none", sm: "flex"}, overflow: "auto", color: "white"}}>
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
                                            fontWeight:600,
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
                                        width: "3rem", height: "3rem", borderRadius: "50%",
                                    }}
                                         src={Hyper}
                                         alt="هایپر استار"
                                    />
                                </Box>

                                <Box sx={{
                                    display:"flex",

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
                                    <Typography sx={{display: {xs: "none", sm: "flex"}}}> خرید از   </Typography>
                                    <Typography sx={{fontWeight: 600}}>هایپراستار صبا</Typography>
                                </Box>


                            </Box>
                            <Box>
                                <Button sx={{
                                    width: "10rem",
                                    backgroundColor: "white",
                                    color: "blue",
                                    borderRadius: "20rem",
                                    marginRight:"2rem",
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
                                }} variant="contained" endIcon={<ExpandMore sx={{fontSize: "0.2rem",}}/>}>
                                        تغییر فروشگاه
                                </Button>
                            </Box>


                        </Box>
                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            [theme.breakpoints.down('sm')]: {
                                marginLeft: '0', order: "2"

                            },
                            [theme.breakpoints.between('sm', 'md')]: {
                                marginTop: "1rem"

                            },
                        }}>

                            <QueryBuilder sx={{
                                display: {xs: "none", sm: "flex"}, fontSize: "large",
                                marginLeft:"0.6rem",
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
                                fontWeight:600,
                                marginLeft:"6rem",
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
                            justifyContent:"center",
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
                        <SlideDrawer open={drawerOpen} onClose={toggleDrawer}/>
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



            <Paper sx={{display: {xs: "flex", sm: "none"}, position: 'fixed', bottom: 0, left: 0, right: 0,zIndex:1}}
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