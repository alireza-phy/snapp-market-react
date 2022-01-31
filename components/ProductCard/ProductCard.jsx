import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import {useState, useRef} from "react";

function CardSingle({src, width, imgPack, ordinary, special, goldenOffer, list, category}) {
    const discount = 20
    const price = 85000
    const available = true
    const maximumOrder = 6;
    const [quantity, setQuantity] = useState(0)
    const [goldenOfferShow, setGoldenOfferShow] = useState(false)
    const refer = useRef(null)
    const showDetailHandler = () => {
        setGoldenOfferShow(!goldenOfferShow)
        console.log(refer.current)
        refer.current.style.transform = "rotateY(180deg)"
    }
    const showCardHandler = () => {
        setGoldenOfferShow(!goldenOfferShow)
        refer.current.style.transform = "rotateY(0)"
    }
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
            my: (goldenOffer || special) && 0.75,
            mx: (goldenOffer || special) && 0.5,
            direction: 'rtl',
            borderLeft: ordinary && 1,
            border: list && 1,
            borderColor: 'rgba(0, 0, 0, 0.12)',
            borderRadius: (goldenOffer || special) ? '0.5rem' : '0',
            boxShadow: 'none',
            flex: category ? '10 0 auto' : 'none',
            zIndex: 99,
            transition: goldenOffer && 'all 0.6s ease 0s',
            transformStyle: goldenOffer && 'preserve-3d',
            // backfaceVisibility: goldenOffer && 'hidden',
            ':hover': {
                boxShadow: (ordinary || list) && 'rgba(0, 0, 0, 0.1) 0px 1px 28px',
                zIndex: (ordinary || list) && 100
            },
            ':hover img': {
                transition: 'transform 0.25s ease-in-out 0s',
                transform: goldenOffer || special || list ? 'none' : 'translateY(-0.4rem)',
            }
        }}>
            <CardContent sx={{p: '0', cursor: goldenOffer ? 'default' : 'pointer'}}>
                {
                    goldenOffer
                    &&
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle2" component="p">
                            بقچه طلایی
                        </Typography>
                        {
                            goldenOfferShow === false
                                ?
                                <Typography onClick={showDetailHandler} variant="subtitle2" component="p"
                                            sx={{color: '#2347fb', cursor: 'pointer'}}>
                                    جزئیات بیشتر
                                </Typography>
                                :
                                <ClearIcon sx={{
                                    color: '#2347fb',
                                    fontSize: '1.3rem',
                                    border: 2,
                                    borderRadius: '50%',
                                    borderColor: '#2347fb',
                                    padding: 0.1
                                }}
                                           onClick={showCardHandler}/>
                        }
                    </Box>
                }
                <Box sx={{
                    display: 'flex',
                    justifyContent: goldenOffer ? 'start' : 'center',
                    position: 'relative'
                }}>
                    {
                        goldenOffer
                            ?
                            <AvatarGroup sx={{direction: 'ltr', my: 2}}>
                                {imgPack.map(img => <Avatar key={img.id} sx={{width: 60, height: 60, border: 1}}
                                                            src={img.src}/>)}
                            </AvatarGroup>
                            :
                            <CardMedia
                                sx={{
                                    width: 170, pb: 0.75, transition: 'transform 0.25s ease-in-out 0s',
                                }}
                                component="img"
                                src={src}
                                alt=""
                            />
                    }
                    {
                        available
                        ||
                        <Typography variant="body1" component="p" sx={{
                            position: 'absolute', top: '40%', boxShadow: 'rgb(163 163 163) 0px 0px 1rem 0px',
                            padding: '0.25rem 0.6rem',
                            color: '#0000ee',
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderRadius: '0.9rem',
                            fontSize: '1rem'
                        }}>
                            تمام شد
                        </Typography>
                    }
                </Box>
                <Typography variant="body1" component="p" sx={{
                    height: 48,
                    color: '#30354b',
                    mb: 0.5
                }}>
                    {
                        goldenOffer
                            ?
                            <Typography variant="body1" component="p">
                                با خرید یکجای این محصولات
                                {
                                    <Typography variant="body1" component="span"
                                                sx={{color: '#f9131a'}}>
                                        {discount}%
                                    </Typography>
                                }
                                تخفیف
                                {<br/>}
                                بیشتر بگیرید
                            </Typography>
                            : 'پنیر خامه ای هراز 200 گرمی'
                    }
                </Typography>
            </CardContent>
            <CardActions
                sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
                <Box sx={{flexGrow: '2'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        visibility: discount === null ? 'hidden' : 'visible'
                    }}>
                        <Typography sx={{
                            backgroundColor: discount > 12 ? 'rgb(250, 15, 27)' : '#fff',
                            color: discount > 12 ? '#fff' : '#fa0f1b',
                            border: discount > 12 ? 'none' : '1px solid #fa0f1b',
                            borderRadius: '0.4rem',
                            px: .75,
                            py: .75
                        }} variant="body2" component="span">
                            %{discount}
                        </Typography>
                        <Typography variant="body2" component="p"
                                    sx={{
                                        mr: 0.55,
                                        textDecoration: '#30354bbd line-through',
                                        color: '#30354bbd'
                                    }}>
                            {price}
                        </Typography>
                    </Box>
                    <Box sx={{mt: 0.75}}>
                        <Typography variant="body2"
                                    component="span">
                            {Math.floor(price - price * (discount / 100))} تومان
                        </Typography>
                    </Box>
                </Box>
                {
                    available
                    &&
                    <Box>
                        {
                            quantity === 0 ?
                                <Button onClick={incrementHandler} sx={{
                                    flexGrow: '1',
                                    px: 1.5,
                                    borderRadius: '1rem',
                                    transition: 'none',
                                    ':hover': {
                                        bgcolor: '#2446f5',
                                        color: '#fff',
                                    },
                                }} size='small'
                                        variant="outlined">
                                    افزودن به سبد
                                </Button>
                                :
                                <Box sx={{display: "flex", alignItems: 'center'}}>
                                    {
                                        quantity > 1
                                            ?
                                            <RemoveIcon sx={{
                                                bgcolor: '#fff',
                                                color: '#2446f5',
                                                fontSize: 30,
                                                borderRadius: '100%',
                                                border: 1,
                                                borderColor: 'grey.300',
                                                p: 0.75,
                                                ':hover': {
                                                    bgcolor: '#2446f5',
                                                    color: '#fff',
                                                },
                                            }}
                                                        onClick={decrementHandler}/> :
                                            <DeleteOutlineOutlinedIcon sx={{
                                                bgcolor: '#fff',
                                                color: '#2446f5',
                                                fontSize: 30,
                                                borderRadius: '100%',
                                                p: 0.75,
                                                ':hover': {
                                                    bgcolor: '#2446f5',
                                                    color: '#fff',
                                                },
                                            }}
                                                                       onClick={decrementHandler}/>}
                                    <Box sx={{display: 'flex', justifyContent: 'center', minWidth: 30}}>
                                        <Typography variant="body1"
                                                    component="span"
                                                    sx={{color: '#2446f5'}}>
                                            {quantity}
                                        </Typography>
                                    </Box>
                                    {
                                        maximumOrder === quantity
                                            ?
                                            <AddIcon
                                                disable
                                                sx={{
                                                    bgcolor: '#fff',
                                                    color: 'grey.500',
                                                    fontSize: 30,
                                                    borderRadius: '100%',
                                                    border: 1,
                                                    borderColor: 'grey.300',
                                                    p: 0.75,
                                                    cursor: 'not-allowed'
                                                }}/>
                                            :
                                            <AddIcon
                                                sx={{
                                                    bgcolor: '#fff',
                                                    color: '#2446f5',
                                                    fontSize: 30,
                                                    borderRadius: '100%',
                                                    border: 1,
                                                    borderColor: 'grey.300',
                                                    p: 0.75,
                                                    ':hover': {
                                                        bgcolor: '#2446f5',
                                                        color: '#fff',
                                                    },
                                                }}
                                                onClick={incrementHandler}/>}
                                </Box>
                        }
                    </Box>
                }
            </CardActions>
        </Card>
    );
}

export default CardSingle;