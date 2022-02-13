import * as React from 'react';
import GoldenCard from '../GoldenCard/GoldenCard';
import CardActions from '@mui/material/CardActions';
import CardPrice from "../CardPrice/CardPrice";
import {useState} from 'react';
import {
    Box,
    Card,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ImageIcon,
    Divider,
    IconButton
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ReactCardFlip from 'react-card-flip';
import CardContent from '@mui/material/CardContent';
import {goldenBoqche} from '../ProductData/ProductData'

// class FlipGoldenCard extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             isFlipped: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick = (e) => {
//         e.preventDefault();
//         this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
//         console.log("*")
//     }
//
//     render() {

const FlipGoldenCard =() =>{
    const [isFlipped,SetFlipped]=useState(false)
    const handleClick=()=>{
        SetFlipped(!isFlipped);
    };
        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Box sx={{
                    width:'15rem',
                    height:'16rem',
                    py: '1rem',
                    px: '1rem',
                    my: 0.75,
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
                        data={goldenBoqche('dairyProduct')}
                    >

                    </GoldenCard>

                </Box>

                <Card sx={{
                    width:'20rem',
                    height:'16rem',
                    py: '1rem',
                    px: '1rem',
                    my: '1rem',
                    mx: 0.5,
                    zIndex: 99,
                    borderRadius: '0.5rem',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    backfaceVisibility: 'hidden',
                    scrollBehavior: 'smooth',
                    wordBreak: 'breakAll',
                    overflowY: 'auto',
                   scrollbar:{display: 'none'}
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
                            {

                                goldenBoqche('dairyProduct').map(item =>
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
                                        <Typography sx={{textAlign: 'right',fontSize:'1rem',width:90}}>{item.name}</Typography>
                                        <CardActions 
                                            sx={{width:140,p: '0', display: 'flex', alignItems: 'flex-end',fontSize:'0.5rem',marginRight:5}}>
                                            <CardPrice Exdiscount={10} price={item.price} discount={item.discount}/>
                                        </CardActions>
                                        {/* <Divider component="li"/> */}
                                    </ListItem>
                                )
                            }
                        </Box>
                    </List>
                </Card>
            </ReactCardFlip>
        )
}

export default FlipGoldenCard;