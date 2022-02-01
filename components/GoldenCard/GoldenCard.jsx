import {useState, useRef} from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CardPrice from "../CardPrice/CardPrice";
import CardAddToCartButton from "../CardAddToCartButton/CardAddToCartButton";

const GoldenCard = ({width, imgPack, category}) => {
    const discount = 19
    const price = 95000
    const available = true
    const maximumOrder = 1;
    const refer = useRef(null)
    const [goldenOfferShow, setGoldenOfferShow] = useState(false)
    const showDetailHandler = () => {
        setGoldenOfferShow(!goldenOfferShow)
        refer.current.style.transform = "rotateY(180deg)"
    }
    // const showCardHandler = () => {
    //     setGoldenOfferShow(!goldenOfferShow)
    //     refer.current.style.transform = "rotateY(0)"
    // }
    const [quantity, setQuantity] = useState(0)
    const incrementHandler = () => {
        setQuantity(quantity + 1)
    }
    const decrementHandler = () => {
        setQuantity(quantity - 1)
    }
    return (
        <Card ref={refer} sx={{
            width: {width},
            py: '1rem',
            px: '1rem',
            my: 0.75,
            mx: 0.5,
            direction: 'rtl',
            borderRadius: '0.5rem',
            boxShadow: 'none',
            flex: category ? `0 0 ${width}` : 'none',
            zIndex: 99,
            transition: 'all 0.6s ease 0s',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            ':hover img': {
                transition: 'transform 0.25s ease-in-out 0s',
            }
        }}>
            <CardContent sx={{p: '0'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="subtitle2" component="p">
                        بقچه طلایی
                    </Typography>
                    <Typography onClick={showDetailHandler} variant="subtitle2" component="p"
                                sx={{color: '#2347fb', cursor: 'pointer'}}>
                        جزئیات بیشتر
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    position: 'relative'
                }}>
                    <AvatarGroup sx={{direction: 'ltr', my: 2}}>
                        {
                            imgPack.map(img => <Avatar key={img.id} sx={{width: 60, height: 60, border: 1}}
                                                       src={img.src}/>)
                        }
                    </AvatarGroup>
                </Box>
                <Typography variant="body1" component="p" sx={{
                    height: 48,
                    color: '#30354b',
                    mb: 0.5
                }}>
                    <Typography variant="body1" component="p">
                        با خرید یکجای این محصولات
                        &nbsp;
                        {
                            <Typography variant="body1" component="span"
                                        sx={{color: '#f9131a'}}>
                                {discount}%
                            </Typography>
                        }
                        &nbsp;
                        تخفیف
                        {<br/>}
                        بیشتر بگیرید
                    </Typography>
                </Typography>
            </CardContent>
            <CardActions
                sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
                <CardPrice price={price} discount={discount}/>
                {
                    available
                    &&
                    <CardAddToCartButton quantity={quantity}
                                         incrementHandler={incrementHandler}
                                         decrementHandler={decrementHandler}
                                         maximumOrder={maximumOrder}/>
                }
            </CardActions>
        </Card>
    )
}
export default GoldenCard