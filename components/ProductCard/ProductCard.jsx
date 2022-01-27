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
import {useState} from "react";

const ProductSingle = ({src, width, imgPack, ordinary, special, goldenOffer,category}) => {
    const discount = 13
    const price = 99000
    const available = true
    const [quantity, setQuantity] = useState(0)
    const incrementHandler = () => {
        setQuantity(quantity + 1)
    }
    const decrementHandler = () => {
        setQuantity(quantity - 1)
    }
    return (
        <Card sx={{
            width: {width},
            py: '1rem',
            px: '1rem',
            mx: special && 1.5,
            direction: 'rtl',
            borderLeft: ordinary && 1,
            borderColor: 'rgba(0, 0, 0, 0.12)',
            borderRadius: special ? '0.5rem' : '0',
            boxShadow: 'none',
            flex: category ? '10 0 auto' : 'none',
            zIndex: 99,
            ':hover': {
                boxShadow: ordinary && 'rgba(0, 0, 0, 0.1) 0px 1px 28px',
                zIndex: ordinary && 100
            },
            ':hover img': {
                transition: 'transform 0.25s ease-in-out 0s',
                transform: goldenOffer || special ? 'none' : 'translateY(-0.4rem)',
            }
        }}>
            <CardContent sx={{p: '0', cursor: goldenOffer ? 'default' : 'pointer'}}>
                {
                    goldenOffer
                    &&
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle2" component="p">بقچه طلایی</Typography>
                        <Typography variant="subtitle2" component="p" sx={{color: '#2347fb', cursor: 'pointer'}}>جزئیات
                            بیشتر</Typography>
                    </Box>
                }
                <Box sx={{display: 'flex', justifyContent: goldenOffer ? 'start' : 'center', position: 'relative'}}>
                    {
                        goldenOffer
                            ?
                            <AvatarGroup sx={{direction: 'ltr', my: 2}}>
                                {imgPack.map(img => <Avatar key={img.id} sx={{width: 60, height: 60, border: 1}}
                                                            src={img.src}/>)}
                                {/*style={{border:'1px solid #bdbdbd'}}*/}
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
                    {available ||
                    <Typography variant="body1" component="p" sx={{
                        position: 'absolute', top: '40%', boxShadow: 'rgb(163 163 163) 0px 0px 1rem 0px',
                        padding: '0.25rem 0.6rem',
                        color: '#0000ee',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderRadius: '0.9rem',
                        fontSize: '1rem'
                    }}>تمام شد</Typography>}
                </Box>
                <Typography variant="body1" component="p" sx={{
                    height: 48,
                    color: '#30354b'
                }}>{goldenOffer ?
                    <Typography variant="body1" component="p">
                        با خرید یکجای این محصولات
                        {<Typography variant="body1" component="span"
                                     sx={{color: '#f9131a'}}>  {discount}%
                        </Typography>}
                        تخفیف بیشتر بگیرید
                    </Typography>
                    : 'پنیر خامه ای هراز 200 گرمی'}</Typography>
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
                                    }}>{price}</Typography>
                    </Box>
                    <Box sx={{mt: 0.75}}>
                        <Typography variant="body2"
                                    component="span">{Math.floor(price - price * (discount / 100))} تومان</Typography>
                    </Box>
                </Box>
                {available
                &&
                <Box>
                    {
                        quantity === 0 ?
                            <Button onClick={incrementHandler} sx={{
                                flexGrow: '1', px: 1.5, borderRadius: '1rem', transition: 'none', ':hover': {
                                    bgcolor: '#2446f5',
                                    color: '#fff',
                                },
                            }} size='small'
                                    variant="outlined">
                                افزودن به سبد
                            </Button>
                            :
                            <Box sx={{display: "flex", alignItems: 'center'}}>
                                {quantity > 1 ?
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
                                    </Typography></Box>
                                {goldenOffer && quantity === 1 ?
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

export default ProductSingle;