import * as React from 'react';
import GoldenCard from '../GoldenCard/GoldenCard';
import CardActions from '@mui/material/CardActions';
import CardPrice from "../CardPrice/CardPrice";
import {useState} from 'react';
import {styled} from '@mui/material/styles';
import {
    Box,
    Card,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ImageIcon,
    Divider,
    IconButton
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ReactCardFlip from 'react-card-flip';
import {goldenBoqche} from '../ProductData/ProductData'

const Scroll = styled('div')(({theme})=>({
        '*::-webkit-scrollbar':{
            width:6},
        '*::-webkit-scrollbar-track':{
            backgroundColor:'#0f2b55',
            borderRadius:10,
        },
        '*::-webkit-scrollbar-thumb':{
            backgroundColor:'white',
            borderRadius:10,
        }
    }
));

const FlipGoldenCard =() =>{
    const [isFlipped,SetFlipped]=useState(false)
    const handleClick=()=>{
        SetFlipped(!isFlipped);
    };
    const theme = useTheme();
        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Box sx={{
                    width:'15rem',
                    py: '1rem',
                    px: '1rem',
                    my: '1rem',
                    mx: 0.5,
                    zIndex: 99,
                    borderRadius: '0.5rem',
                    boxShadow: 'none',
                }}>
                    <GoldenCard
                        SetFlipped={SetFlipped}
                        isFlipped={isFlipped}
                        width={'15rem'}
                        category
                        data={goldenBoqche('grocery-bread')}
                    >

                    </GoldenCard>

                </Box>

                <Card sx={{
                    width:'26rem',
                    height:'16.2rem',
                    py: '1rem',
                    px: '1rem',
                    my: '2.5rem',
                    position:'reletive',
                    mx: '1.5rem',
                    zIndex: 99,
                    borderRadius: '0.5rem',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    backfaceVisibility: 'hidden',
                    scrollBehavior: 'smooth',
                    wordBreak: 'breakAll',
                    overflowY: 'auto',
                }}>

                    <List sx={{width: '100%', bgcolor: 'background.paper', height: 'initial'}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="subtitle2" component="p">
                                بقچه طلایی
                            </Typography>
                            <label htmlFor="icon-button-file">
                                <IconButton onClick={handleClick} color="primary" aria-label="upload picture"
                                            component="span">
                                    <CancelOutlinedIcon/>
                                </IconButton>
                            </label>
                        </Box>
                        <Box sx={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '12rem'}}>
                            <Scroll>
                            {

                                goldenBoqche('grocery-bread').map(item =>
                                    <ListItem  key={item.id}>
                                        <ListItemAvatar>
                                            <Avatar sx={{
                                                border: 1,
                                                borderColor: 'rgb(230, 230, 230)',
                                                borderRadius: '50%',
                                                width: '3rem',
                                                height: '3rem',
                                                p: '0.25rem'
                                            }}
                                                    src={item.images[0].url}
                                            >
                                                <ImageIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography sx={{textAlign: 'right',fontSize:'0.8rem',width:150}}>{item.name}</Typography>
                                        <CardActions 
                                            sx={{width:140,p: '0', display: 'flex', alignItems: 'flex-start',fontSize:'0.5rem',marginRight:'2rem'}}>
                                            <CardPrice Exdiscount={10} price={item.price} discount={item.discount}/>
                                        </CardActions>
                                        {/* <Divider component="li"/> */}
                                    </ListItem>
                                )
                            }
                            </Scroll>
                        </Box>
                    </List>
                </Card>
            </ReactCardFlip>
        )
}

export default FlipGoldenCard;