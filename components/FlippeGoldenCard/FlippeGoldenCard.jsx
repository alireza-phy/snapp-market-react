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
                    width: "15rem",
                    py: '1rem',
                    px: '1rem',
                    my: 0.75,
                    mx: 0.5,
                    zIndex: 99,
                    borderRadius: '0.5rem',
                    boxShadow: 'none',
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    </Box>
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
                    width: "25rem",
                    py: '1rem',
                    px: '1rem',
                    my: 0.75,
                    mx: 0.5,
                    zIndex: 99,
                    position: 'absolute',
                    borderRadius: '0.5rem',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    backfaceVisibility: 'hidden',
                    scrollBehavior: 'smooth',
                    wordBreak: 'breakAll',
                    overflowY: 'auto'
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
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{
                                                border: 1,
                                                borderColor: 'rgb(230, 230, 230)',
                                                borderRadius: '50%',
                                                width: '3rem',
                                                height: '3rem',
                                                p: '0.5rem'
                                            }}
                                                    src={item.images[0].url}
                                            >
                                                <ImageIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText sx={{textAlign: 'right'}}
                                                      primary={item.name}/>
                                        <CardActions
                                            sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
                                            <CardPrice Exdiscount={10} price={item.price} discount={item.discount}/>
                                        </CardActions>
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