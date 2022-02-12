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
import PN from "persian-number";

const GoldenCard = ({width, category, data , SetFlipped, isFlipped }) => {

    const imgPack = [{
        id: 1,
        src: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/383613.jpg'
    }, {
        id: 2,
        src: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122727.jpg'
    }, {
        id: 3,
        src: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210815-122728.jpg'
    }]
    const discount = 10
    let price = 0
    data.map(item => price += item.price )
    const available = true
    const maximumOrder = 1;
    const refer = useRef(null)
    // const [goldenOfferShow, setGoldenOfferShow] = useState(false)
    // const showDetailHandler = () => {
    //     setGoldenOfferShow(!goldenOfferShow)
    //     refer.current.style.transform = "rotateY(180deg)"
    // }
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

    const handleClick=()=>{
        SetFlipped(!isFlipped);
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
                    <Typography onClick={handleClick} variant="subtitle2" component="p"
                                sx={{color: '#2347fb', cursor: 'pointer'}}>
                        جزئیات بیشتر
                    </Typography>
                    {/* <Typography onClick={showDetailHandler} variant="subtitle2" component="p"
                                sx={{color: '#2347fb', cursor: 'pointer'}}>
                        جزئیات بیشتر
                    </Typography>*/}
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    position: 'relative'
                }}>
                    <AvatarGroup sx={{direction: 'ltr', m: 2}}>
                        {
                            data.slice(0, 3).map(item => <Avatar
                                    style={{
                                        border: '0.1px solid lightgray',
                                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                                    }}
                                    key={item.id}
                                    sx={{width: 60, height: 60}}
                                    src={item.images[0].url}
                                />
                            )
                        }
                    </AvatarGroup>
                </Box>
                <Typography variant="body1" component="p" sx={{
                    minHeight: 48,
                    color: '#30354b',
                    mb: 0.5,
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                }}>
                    <Typography variant="body1" component="p">
                        با خرید یکجای این محصولات
                        &nbsp;
                        {
                            <Typography variant="body1" component="span"
                                        sx={{color: '#f9131a'}}>
                                {PN.convertEnToPe(discount)} ٪
                            </Typography>
                        }
                        &nbsp;
                        تخفیف بیشتر بگیرید
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