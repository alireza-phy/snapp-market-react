import * as React from 'react';
import { connect } from "react-redux";
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
import Search from '../Search/Search'
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

const firstCol = [
    {
        id: 1, name: "????????????", groups: [
            {id: 1, group: '??????'},
            {id: 2, group: '????????'},
            {id: 3, group: '????????'},
            {id: 4, group: '??????'},
            {id: 5, group: '??????'},
            {id: 6, group: '????????'},
            {id: 7, group: '??????'},
            {id: 8, group: '??????????'},
        ]
    },
    {
        id: 2, name: '??????????????', groups: [
            {id: 1, group: '????????????'},
            {id: 2, group: '??????????????????'},
            {id: 3, group: '????????????'},
            {id: 4, group: '?????? ?? ??????????'},
            {id: 5, group: '????'},
            {id: 6, group: '???????? ?? ?????? ??????????'},
            {id: 7, group: '?????????????? ?????????? ????'},
            {id: 8, group: '????????'},
            {id: 9, group: '??????????????'}
        ]
    },
    {
        id: 3, name: '???????? ?? ?????????????? ????????', groups: [
            {id: 1, group: '???????? ????????'},
            {id: 2, group: '?????????????? ?? ???????? ??????'}
        ]
    },
    {
        id: 4, name: '?????????????? ?????? ?? ????????????', groups: [
            {id: 1, group: '??????'},
            {id: 2, group: '????????'},
            {id: 3, group: '????????'},
            {id: 4, group: '??????'},
            {id: 5, group: '????????????'},
            {id: 6, group: '???????? ?????? ?? ??????????'},
            {id: 7, group: '?????????? ????????????'}
        ]
    },
    {
        id: 5, name: '???????? ?? ??????????', groups: [
            {id: 1, group: '???????? ?????????? ????????'},
            {id: 2, group: '???????????? ????????'},
            {id: 3, group: '?????????? ???????? ?? ??????????'},
            {id: 4, group: '?????????? ???????? ????????'}
        ]
    }
]
const secondCol = [
    {
        id: 1, name: "?????????????? ?? ??????", groups: [
            {id: 1, group: '????????'},
            {id: 2, group: '???????????????? ?? ?????????????? ?? ????????'},
            {id: 3, group: '????'},
            {id: 4, group: '???????????? ?? ????????'},
            {id: 5, group: '?????????? ??????'},
            {id: 6, group: '????????'},
            {id: 7, group: '?????? ?? ?????? ?? ????????'},
            {id: 8, group: '???????? ???????????? ?? ??????'},
            {id: 9, group: '????????'},
            {id: 10, group: '?????????? ????????'}
        ]
    },
    {
        id: 2, name: '???????? ????????????????', groups: [
            {id: 1, group: '?????? ??????'},
            {id: 2, group: '??????'},
            {id: 3, group: '???????? ????????'},
            {id: 4, group: '???????? ?? ????????'},
            {id: 5, group: '?????????? ?? ????????????'}
        ]
    },
    {
        id: 3, name: '?????????? ?? ???????? ??????????', groups: [
            {id: 1, group: '?????????????? ?????? ?????????? ????????????'},
            {id: 2, group: '???? ????????'},
            {id: 3, group: '???????? ???????? ??????????'},
            {id: 4, group: '?????????? ?? ??????????'},
            {id: 5, group: '???????? ?????????? ????????'}
        ]
    },
    {
        id: 4, name: '???????? ?? ?????? ??????????', groups: [
            {id: 1, group: '?????????? ????????????????'},
            {id: 2, group: '?????????? ?????????? ????????'},
            {id: 3, group: '?????????? ????????'},
            {id: 4, group: '?????????? ???????? ?? ?????????? ??????????????'},
            {id: 5, group: '?????????? ?? ???????? ?? ???????? ????????'},
            {id: 6, group: '??????????????'},
            {id: 7, group: '???????? ?? ??????'},
            {id: 8, group: '?????????? ??????????'},
            {id: 9, group: '???????? ?? ????????'},
            {id: 10, group: '???????????? ?????????? ?????????? ?? ????????????'},
            {id: 11, group: '?????????? ?????? ?? ????????'},
            {id: 12, group: '?????????? ?????????????? ?? ??????????'}
        ]
    },
]
const thirdCol = [
    {
        id: 1, name: "???????????? ?? ????????????", groups: [
            {id: 1, group: '???????????? ??????????'},
            {id: 2, group: '???????????? ???????? ????'},
            {id: 3, group: '???????????? ??????????'},
            {id: 4, group: '?????????? ???????? ?? ????????????????'},
            {id: 5, group: '?????? ?????????? ?? ???? ?????????? ?????????? ?????????? ??????????????'},
            {id: 6, group: '???????????? ????????'},
            {id: 7, group: '???????????? ????????'},
            {id: 8, group: '?????? ?? ???????? ??????????????'},
            {id: 9, group: '?????????????? ?????????? ???????? ?? ????????'}
        ]
    },
    {
        id: 2, name: '???????????? ?? ??????????????', groups: [
            {id: 1, group: '?????????????? ????????????'},
            {id: 2, group: '???????????? ?? ???????????? ????????'},
            {id: 3, group: '?????????? ?? ???????????? ????'},
            {id: 4, group: '?????????? ????'},
            {id: 5, group: '???????????? ?? ???????????? ??????'},
            {id: 6, group: '???????????? ????????'},
            {id: 7, group: '?????????? ???????? ?? ??????'},
            {id: 8, group: '???????????? ????????'},
            {id: 9, group: '?????????? ?? ??????????????'}
        ]
    },
    {
        id: 3, name: '????????????', groups: [
            {id: 1, group: '??????'},
            {id: 2, group: '????????'},
            {id: 3, group: '???????? ???????? ?? ????????'},
            {id: 4, group: '?????????? ????????????'},
            {id: 5, group: '???????? ????????????'},
            {id: 6, group: '?????? ?????????? ??????????'}
        ]
    },
    {
        id: 4, name: '?????????? ???????? ?? ??????????????', groups: [
            {id: 1, group: '???????????? ?????????? ?? ????????'},
            {id: 2, group: '?????? ?? ??????????????'},
            {id: 3, group: '?????????? ???????? ????????'},
            {id: 4, group: '?????????? ???????? ????????????????'}
        ]
    },
]
const forthCol = [
    {
        id: 1, name: "????????????", groups: [
            {id: 1, group: '?????????????? ?? ????????'},
            {id: 2, group: '????????'},
            {id: 3, group: '?????? ?? ??????????'},
            {id: 4, group: '?????? ?? ????????'},
            {id: 5, group: '?????????? ?? ????????????'},
            {id: 6, group: '???????????? ?? ??????????'},
            {id: 7, group: '???????? ???? ?? ?????? ????????'},
            {id: 8, group: '?????? ???????? ?? ??????????'},
            {id: 9, group: '?????????? ?? ??????????'}
        ]
    },
    {
        id: 2, name: '?????????? ?? ??????????????', groups: [
            {id: 1, group: '????'},
            {id: 2, group: '??????????'},
            {id: 3, group: '?????????????? ?? ??????????'},
            {id: 4, group: '???????????? ?? ???????? ?? ????????????'},
            {id: 5, group: '???????? ?? ??????'},
            {id: 6, group: '?????????????? ?????? ???????????? ??????'},
            {id: 7, group: '????????????'},
            {id: 8, group: '?????????????? ?????? ?? ?????? ??????'},
            {id: 9, group: '???????? ?????????????? ????'}
        ]
    }
]
function mapStateToProps(state) {
    return {
        count: state.productCountReducer.count,
      };
  }
const Header = ({
                    drawerOpen,
                    drawerOpenCart,
                    toggleDrawer,
                    toggleDrawerCart,
                    value,
                    handleChange,
                    count,
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
                                        alt="???????? ??????????"
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
                                        ?????????? ???????? ?????? ???? ???????????? ????????
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
                                        ???????? / ??????????
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
                                        ?????? ????????
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
                                            {count}
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
                                             alt="?????????? ??????????"
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
                                        <Typography sx={{display: {xs: "none", sm: "flex"}}}> ???????? ???? </Typography>
                                        <Typography sx={{fontWeight: 600}}> ???????????????????? ?????? </Typography>
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
                                        ?????????? ??????????????
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

                                    ?????????? ???? ?????????? ???????? 11

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

                                ???????? ???????? ????
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
                                                                                {groups.group}??&nbsp;
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
                                                                                {groups.group}??&nbsp;
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
                                                                                {groups.group}??&nbsp;
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
                                                                                {groups.group}??&nbsp;
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
                            <Search/>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Paper sx={{display: {xs: "flex", sm: "none"}, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}}
                   elevation={3}>
                <BottomNavigation sx={{width: "100%", color: "black"}} showLabels value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="????????"
                        value="????????"
                        icon={<HomeOutlinedIcon/>}
                    />
                    <BottomNavigationAction
                        label="???????? ???????? ????"
                        value="???????? ???????? ????"
                        icon={<GridViewOutlined/>}
                        onClick={() => toggleDrawer(true)}
                    />
                    <SlideDrawer open={drawerOpen} onClose={toggleDrawer}/>

                    <BottomNavigationAction
                        label="?????? ????????"
                        value="?????? ????????"
                        icon={
                            <Badge anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                                   badgeContent={count}
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

export default connect(mapStateToProps, null)(Header);