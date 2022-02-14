import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import discount from './discount.jpg'
import Image from "./images/back-header.jpg";
import Logo from "./images/logo.png";
import Hyper from "./images/Hyper.jpg"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SlideDrawer from '../Header/slideDrawer'
import CartDrawer from '../Header/CartDrawer'
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LensIcon from '@mui/icons-material/Lens';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Badge from '@mui/material/Badge'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {ShoppingBagOutlined, PersonOutline, GridViewOutlined} from "@mui/icons-material";
import {styled, alpha} from '@mui/material/styles';
import {useTheme} from '@mui/material/styles';
import {keyframes} from '@mui/system';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '29%',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: {md: 970, lg: 1150},
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    px: 3,
    pt: 3
};
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
        margin: '0.5rem 0'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginRight: "0"
    },
    [theme.breakpoints.between('md', 'lg')]: {
        marginRight: "2rem",
        width: '17rem'
    }
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
            width: '16rem',

        }, [theme.breakpoints.between('sm', 'lg')]: {
            width: '12rem',
        }
        , [theme.breakpoints.down('sm')]: {
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
const scrollToComesOut = keyframes`
  from {
    transform: translateY(-64px);
  }
  to {
    transform: translateY(0);
  }
`;
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
const HeaderStatic = ({
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
        <Box sx={{direction: 'rtl', position: 'sticky', top: 0 , zIndex: 200000}}>
            <Toolbar sx={{
                backgroundImage: `url(${Image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 20rem",

            }}>
                <Container>
                    <Box>
                        <Box sx={{
                            borderBottom: {xs: '1px solid', sm: 0},
                            borderColor: {xs: 'rgba(255, 255, 255, 0.16)', sm: ''}
                        }}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <img
                                        style={{
                                            width: "3.5rem", height: "3.5rem"
                                        }}
                                        src={Logo.src}
                                        alt="اسنپ مارکت"
                                    />
                                    <Button underline="none"
                                            sx={{textOverflow: "ellipsis", display: {xs: 'none', lg: 'flex'}}}>
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
                                                fontSize: "0.5rem", textOverflow: 'ellipsis',
                                            },
                                            [theme.breakpoints.between('sm', 'md')]: {
                                                fontSize: "0.6rem"
                                            },
                                            [theme.breakpoints.up('md')]: {
                                                fontSize: "0.7rem"
                                            },
                                        }}>
                                            ابتدا آدرس خود را انتخاب کنید
                                        </Typography>
                                    </Button>
                                    <Box sx={{display: 'flex', alignItems: "center"}}>
                                        <img style={{
                                            width: 33, height: 33, borderRadius: "50%"
                                        }}
                                             src={Hyper.src}
                                             alt="هایپر استار"
                                        />
                                        <Box sx={{
                                            display: "flex",
                                            marginRight: '0.5rem',
                                            gap: '0.5rem',
                                            fontSize: "2rem",
                                            color: '#fff'
                                        }}>
                                            <Typography component='p' variant='subtitle2'
                                                        sx={{display: {xs: "none", sm: "flex"}}}> خرید از </Typography>
                                            <Typography component='p' variant='subtitle2' sx={{fontWeight: 600}}>
                                                هایپراستار صبا
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
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
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <Box sx={{
                                        display: 'flex', alignItems: "center",
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
                                                sx={{
                                                    display: {xs: "none", sm: "inline-block"},
                                                    width: {sm: 10, md: '85px'},
                                                    overflow: 'hidden',
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: 'nowrap',
                                                    color: "white"
                                                }}>
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
                            </Box>
                        </Box>
                        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
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
                    </Box>
                </Container>
                <Paper
                    sx={{display: {xs: "flex", sm: "none"}, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}}
                    elevation={3}>
                    <BottomNavigation sx={{width: "100%", color: "black"}} showLabels value={value}
                                      onChange={handleChange}>
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
            </Toolbar>
            <Box sx={{
                display: {xs: 'none', sm: 'block'},
                boxShadow: 'rgb(0 0 0 / 12%) 0px 0.6rem 2.5rem 0px',
                py: 1.5,
                backgroundColor: '#fff',
                animation: `${scrollToComesOut} 0.3s ease-in-out 0s`,
            }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{display: 'flex', gap: 1.5}}>
                            <Paper variant='outlined'
                                   sx={{
                                       display: 'flex',
                                       alignItems: 'center',
                                       gap: 0.75,
                                       border: 0,
                                       cursor: 'pointer'
                                   }}>
                                <Box onClick={() => toggleDrawer(true)}
                                     sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <GridViewOutlined sx={{fontSize: "1rem"}}/>
                                    <Typography component='p' variant='body2'
                                                sx={{color: '#404040'}}>
                                        دسته بندی ها
                                    </Typography>
                                </Box>
                            </Paper>
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
                            <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                <Box component='img' src={discount} sx={{width: 20, height: 20, mx: 1}}/>
                                <Typography component='p' variant='body2' sx={{color: '#404040'}}>
                                    تخفیف های امروز
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{cursor: 'pointer'}}>
                            <Typography component='p' variant='body2' sx={{color: '#404040'}}>
                                سوالات متداول
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default HeaderStatic