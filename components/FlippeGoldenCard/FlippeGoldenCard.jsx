import * as React from 'react';
import GoldenCard from '../GoldenCard/GoldenCard';
import CardActions from '@mui/material/CardActions';
import CardPrice from "../CardPrice/CardPrice";
import {useState} from 'react';
import {styled,useTheme} from '@mui/material/styles';
import {
    Box,
    Card,
    Grid,
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
import ListItemText from '@mui/material/ListItemText';

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

const FlipGoldenCard =({goldenCatgory}) =>{
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
                        data={goldenBoqche(goldenCatgory)}
                    >

                    </GoldenCard>

                </Box>

                <Card sx={{
                    width:'26rem',
                    height:'16.3rem',
                    py: '1rem',
                    px: '1rem',
                    my: '2.3rem',
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

                                goldenBoqche(goldenCatgory).map(item =>
                                    <Grid key={item.id} container spacing={1} sx={{marginBottom:'0.75rem' , alignItems:'center'}}>
                                        <Grid item xs={2}>
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
                                        </Grid>
                                        <Grid item xs={5.5}>
                                            <Typography variant="body2" style={{ display: "inline-block", whiteSpace: "pre-line" , fontSize:"0.8rem" }} >{item.name}</Typography>
                                        </Grid>
                                        <Grid item xs={4.5}>
                                                <CardPrice Exdiscount={10} price={item.price} discount={item.discount}/>
                                        </Grid>
                                    </Grid>
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