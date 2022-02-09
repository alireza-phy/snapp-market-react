import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box';
import {useState} from "react";
import CardPrice from "../CardPrice/CardPrice";
import CardAddToCartButton from "../CardAddToCartButton/CardAddToCartButton";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useRouter} from 'next/router';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            mobileMd: 321,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function ProductCard({item, width, ordinary, special, list, category}) {

    // let dummyString = item.name.replace(/\s+/g, '-');
    const router = useRouter();

    const showProductHandler = () => {
        router.push('/products/' + item.id)
        // console.log(dummyString)
    }

    const [quantity, setQuantity] = useState(0)
    const incrementHandler = () => {
        setQuantity(quantity + 1)
    }
    const decrementHandler = () => {
        setQuantity(quantity - 1)
    }
    return (
        <Card sx={{
            display: list && {xs: 'flex', sm: 'block'},
            alignItems: list && {xs: 'center'},
            gap: list && {xs: 2, sm: 0, md: 0, lg: 0, xl: 0},
            width: {width},
            py: '1rem',
            px: '1rem',
            my: special && 0.75,
            mx: special && 0.5,
            direction: 'rtl',
            borderLeft: (list || ordinary) && 1,
            borderTop: list && 1,
            borderColor: 'rgba(0, 0, 0, 0.12)',
            borderRadius: special ? '0.5rem' : '0',
            boxShadow: 'none',
            flex: category ? `0 0 ${width}` : 'none',
            zIndex: 99,
            ':hover': {
                boxShadow: (ordinary || list) && 'rgba(0, 0, 0, 0.1) 0px 1px 28px',
                zIndex: (ordinary || list) && 100
            },
            ':hover img': {
                transition: 'transform 0.25s ease-in-out 0s',
                transform: special || list ? 'none' : 'translateY(-0.4rem)',
            }
        }}>
            <CardContent sx={{p: '0', cursor: 'pointer'}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <ThemeProvider theme={theme}>
                        <CardMedia
                            sx={{
                                width: list ? {xs: 70, mobileMd: 90, sm: 170} : 170,
                                height: list && {xs: 70, mobileMd: 90, sm: 170},
                                pb: 0.75,
                                transition: 'transform 0.25s ease-in-out 0s',
                                '-webkit-user-drag': 'none'
                            }}
                            component="img"
                            src={item.images[0].url}
                            alt=""
                        />
                    </ThemeProvider>

                    {
                        (item.inventory.available)
                        ||
                        <Typography variant="body1" component="p"
                                    sx={{
                                        position: 'absolute',
                                        top: '40%',
                                        boxShadow: 'rgb(163 163 163) 0px 0px 1rem 0px',
                                        padding: '0.25rem 0.6rem',
                                        color: '#0000ee',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        borderRadius: '0.9rem',
                                        fontSize: '1rem'
                                    }}
                        >
                            تمام شد
                        </Typography>
                    }
                </Box>
            </CardContent>
            <Box>
            <CardContent sx={{p: '0', cursor: 'pointer'}}>
                <Typography variant="body1" component="p"
                            sx={{
                                minHeight: 48,
                                color: '#30354b',
                                mb: 0.5,
                                wordWrap: 'break-word',
                                wordBreak: 'break-word',
                                whiteSpace: 'pre-wrap'
                            }}
                            onClick={() => showProductHandler()}
                >
                    {item.name}
                </Typography>
            </CardContent>

    <CardActions
        sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
        <CardPrice price={item.price} discount={item.discount}/>
        {
            (item.inventory.available)
            &&
            <CardAddToCartButton quantity={quantity}
                                 incrementHandler={incrementHandler}
                                 decrementHandler={decrementHandler}
                                 maximumOrder={item.MaximumOrder}/>
        }
    </CardActions>
            </Box>
</Card>
);
}

export default ProductCard;