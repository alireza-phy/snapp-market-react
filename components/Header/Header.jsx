import * as React from 'react';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "../../public/mainpageImages/backgroundHeaderImage.jpg";
// import Logo from "../../assets/images/logo.png";
// import Hyper from "../../assets/images/Hyper.jpg"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useTheme, createTheme, makeStyles} from '@mui/material/styles';
import {IconButton, Link, Paper} from "@mui/material";
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
    fontSize: "2rem",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',

    },
    [theme.breakpoints.down('sm')]: {
        height: "2rem"
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginRight:"1rem"
    },
    [theme.breakpoints.up('md')]: {
        marginRight:"1rem"
    },

}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: "black"
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'black',
    display: "flex",
    alignItems: "center",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
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
    const [drawerOpen,setDrawerOpen] = useState(false);
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    };
    const [drawerOpenCart,setDrawerOpenCart] = useState(false);
    const toggleDrawerCart = (value) => {
        setDrawerOpenCart(value)
    };



    return(
        <>
        <AppBar position="static">

            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'column', height: "20rem", backgroundImage: `url(${Image})`,
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
                    height:"14rem"
                },
            }}>

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
                        marginTop:"0.2rem"
                    },
                }}>

                    <Box sx={{
                        display: 'flex', alignItems: "center", marginBottom: "0.8rem",
                        [theme.breakpoints.between('sm', 'md')]: {
                            marginBottom: "0.4rem"
                        },
                        [theme.breakpoints.up('md')]: {
                            marginBottom:"0"
                        },
                    }}>
                        <Button onClick={() => toggleDrawerCart(true)}
                            sx={{
                                display: {xs: "none", sm: "flex"}, backgroundColor: "white",
                                color: "blue",
                                border: "none",
                                width: "12rem",
                                fontSize: "1.4rem",
                                height: "3rem",
                                [theme.breakpoints.between('sm', 'md')]: {
                                    width: "8rem",
                                    height: "2.5rem",
                                    fontSize: "0.8rem",
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize:"1.2rem",
                                    width: "9rem",
                                    height: "2rem",
                                },
                            }}
                            variant="contained" endIcon={<ShoppingBagOutlined/>}
                            size="large"
                        >
                            سبد خرید
                        </Button>
                        <CartDrawer openCart={drawerOpenCart} onCloseCart={toggleDrawerCart}/>

                        <Button variant="outlined" sx={{fontSize: "2rem", border: "none",
                            [theme.breakpoints.up('md')]: {
                                fontSize:"1.2rem"
                            },}}>
                            <Typography sx={{display: {xs: "none", sm: "flex"}, overflow: "auto", color:"white"}}> ورود /
                                عضویت</Typography>
                            <IconButton aria-label="login" size="5rem">
                                <PersonOutline sx={{
                                    color: "white",
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: "1.5rem"
                                    }
                                }}/>
                            </IconButton>
                        </Button>
                    </Box>

                    <Box sx={{display: 'flex', alignItems: "center"}}>

                        <Link href="#" underline="none">
                            <Typography sx={{
                                fontSize: "1.7rem", display: "flex", alignItems: "center", color: "white",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: "0.9rem", overflow: "auto",
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: "1rem"
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize:"1rem"
                                },
                            }}>
                                <ExpandMore/>
                                تهران،میدان انقلاب اسلامی
                                <IconButton>
                                    <LocationOnOutlined sx={{color: "white", fontSize: "0.7rem"}}/>
                                </IconButton>
                            </Typography>
                        </Link>

                        <Box sx={{
                            width: "5rem", height: "5rem",
                            [theme.breakpoints.down('sm')]: {
                                width: "3rem", height: "3rem",
                            },
                            [theme.breakpoints.between('sm', 'md')]: {
                                width: "4rem", height: "4rem",
                            },
                            [theme.breakpoints.up('md')]: {
                                width: "4rem", height: "4rem",
                            },

                        }}>
                            <img
                                style={{
                                    width: "3.5rem", height: "3.5rem",
                                }}
                                // src={Logo}
                                alt="اسنپ مارکت"
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', width: "100%", marginTop: "1rem",
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                        borderBottom: '1px solid rgba(250, 251, 252,0.1)',
                        alignItems: 'flex-end',
                        paddingBottom: "0.9rem"
                    },
                    [theme.breakpoints.between('sm', 'md')]: {
                        marginTop: "0.8rem"

                    },

                }}>

                    <Box sx={{
                        marginLeft: "10rem"
                        , [theme.breakpoints.down('sm')]: {
                            marginLeft: '0', order: "2"

                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            marginLeft: "2rem",
                            marginTop:"1rem"

                        },
                    }}>
                        <Typography sx={{
                            display: "flex", alignItems: "center", fontSize: "1.5rem",
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '0.7rem',
                                marginTop:"0.8rem"
                            },
                            [theme.breakpoints.between('sm', 'md')]: {
                                fontSize: "1rem",
                            },

                            [theme.breakpoints.up('md')]:{
                                fontSize:"1rem"
                            },

                        }}>

                            تحویل از امروز ساعت 11
                            <QueryBuilder sx={{
                                display: {xs: "none", sm: "flex"}, fontSize: "large",
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: "1.5rem",
                                    marginLeft: "0.5rem"
                                },
                                [theme.breakpoints.up('md')]:{
                                    fontSize:"1.5rem",
                                    marginLeft:"0.5rem"
                                }
                            }}/>
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex', alignItems: "center",
                        [theme.breakpoints.down('sm')]: {
                            marginBottom: "0.5rem",
                            order: "1"
                        },
                    }}>

                        <Box sx={{
                            marginRight: "2rem",
                            [theme.breakpoints.down('sm')]: {
                                marginRight: "0.5rem",
                            },
                        }}>
                            <Button sx={{
                                width: "10rem",
                                backgroundColor: "white",
                                color: "blue",
                                borderRadius: "20rem",
                                fontSize: "1rem",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '0.5rem',
                                    width: "6rem",
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: "0.6rem",
                                    width: "6.5rem",
                                    borderRadius: "10rem",
                                    height: "1.5rem"

                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: "0.6rem",
                                    width: "6.5rem",
                                    borderRadius: "10rem",
                                    height: "1.5rem"

                                },
                            }} variant="contained" startIcon={<ExpandMore/>}>
                                تغییر فروشگاه
                            </Button>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: "center",marginRight: "1rem", }}>
                            <Typography sx={{
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
                                خرید از
                                هایپراستار صبا
                            </Typography>

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
                                     // src={Hyper}
                                     alt="هایپر استار"
                                />
                            </Box>

                        </Box>
                    </Box>

                </Box>

                <Box sx={{display: 'flex', width: '100%', justifyContent: "flex-end", marginTop: "2rem",
                    [theme.breakpoints.between('sm', 'md')]: {
                        marginTop:"1.6rem"
                    },
                    [theme.breakpoints.up('md')]: {
                        marginTop:"1rem"
                    },
                }}>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="جست و جوی برند یا محصول"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Button  onClick={() => toggleDrawer(true)}
                             variant="contained" sx={{
                        display: {xs: "none", sm: "flex"},
                        width: "10rem",
                        height: "3rem",
                        backgroundColor: "white",
                        color: "blue",
                        fontSize: "1rem",
                        [theme.breakpoints.between('sm', 'md')]: {
                            fontSize: "0.8rem",
                            width: "7rem",
                            height: "2.6rem",
                        },
                        [theme.breakpoints.up('md')]: {
                            width: "6.6rem",
                            height: "2.3rem",
                            fontSize:"0.8rem"
                        }

                    }}>
                        دسته بندی ها
                        <GridViewOutlined sx={{fontSize:"1rem"}}/>
                    </Button>
                    <SlideDrawer open={drawerOpen} onClose={toggleDrawer}/>
                </Box>

            </Toolbar>

        </AppBar>

        <Paper sx={{display: {xs: "flex", sm: "none"}, position: 'fixed', bottom: 0, left: 0, right: 0}}
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
                    />
                    <BottomNavigationAction
                        label="سبد خرید"
                        value="سبد خرید"
                        icon={
                            <Badge anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                                   badgeContent={4}
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