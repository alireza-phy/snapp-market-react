
import * as React from 'react';
import  GoldenCard from '../GoldenCard/GoldenCard';
import CardActions from '@mui/material/CardActions';
import CardPrice from "../CardPrice/CardPrice";
import {Box,Card,Typography,List,ListItem,ListItemText,ListItemAvatar,Avatar,ImageIcon, Divider,IconButton} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ReactCardFlip from 'react-card-flip';
import CardContent from '@mui/material/CardContent';
class FlipGoldenCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
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
        <Box sx={{display:'flex',justifyContent:'end'}}>
                    {/* <Typography variant="subtitle2" component="p" sx={{}}>
                        بقچه طلایی
                    </Typography> */}
                     <Typography onClick={this.handleClick} variant="subtitle2" component="p"
                                  sx={{color: '#2347fb', cursor: 'pointer'}}>
                     جزئیات بیشتر
                     </Typography> 
          </Box>  
          <GoldenCard width={'15rem'} imgPack={[
          {id:"1", src:"https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60e46400a37e3.jpg"},
          {id:"2", src:"https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/610783ecc41a2.jpg"},
          {id:"3", src:"https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/6107810c1357e.jpg"}
                    ]} category>
          
          </GoldenCard>
          
        </Box>

        <Card  sx={{
        width: "20rem",
        py: '1rem',
        px: '1rem',
        my: 0.75,
        mx: 0.5,
        zIndex: 99,
        position:'absolute',
        borderRadius: '0.5rem',
        boxShadow: 'none',
        display:'flex',
        flexDirection:'row',
        backfaceVisibility: 'hidden',
        scrollBehavior: 'smooth',
        wordBreak:'breakAll',
        overflowY:'auto'}}>
      
        <List sx={{width: '100%',bgcolor: 'background.paper',  height: 'initial'}}>
         <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="subtitle2" component="p">
                        بقچه طلایی
                    </Typography>
           <label htmlFor="icon-button-file">
             <IconButton onClick={this.handleClick} color="primary" aria-label="upload picture" component="span">
               <CancelOutlinedIcon />
             </IconButton>
           </label>
         </Box>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{border:1,borderColor: 'rgb(230, 230, 230)',borderRadius: '50%',width:'3rem' ,height:'3rem',p:'0.5rem'}} 
              src='https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60e46400a37e3.jpg'>
            <ImageIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{fontSize:'1.4rem',textAlign:'right'}} primary="نخود 500 گرمی" />
        <CardActions
                sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
                <CardPrice price={24750} discount={10}/>
            </CardActions>
    </ListItem>
      <Divider  component="li" />
    <ListItem>
        <ListItemAvatar>
          <Avatar sx={{border:1,borderColor: 'rgb(230, 230, 230)',borderRadius: '50%',width:'3rem' ,height:'3rem',p:'0.5rem'}} 
            src='https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/610783ecc41a2.jpg'>
            <ImageIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{fontSize:'1.4rem',textAlign:'right'}} primary="لپه 500 گرمی" />
        <CardActions
                sx={{p: '0', display: 'flex', alignItems: 'flex-end'}}>
                <CardPrice price={242750} discount={10}/>
            </CardActions>
    </ListItem>
      <Divider component="li" />
    <ListItem>
        <ListItemAvatar>
          <Avatar sx={{border:1,borderColor: 'rgb(230, 230, 230)',borderRadius: '50%',width:'3rem' ,height:'3rem',p:'0.5rem'}} 
          src='https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/6107810c1357e.jpg'>
            <ImageIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{fontSize:'1.4rem',textAlign:'right'}} primary="عدس 500 گرمی" />
        <CardActions
                sx={{p: '0', display: 'flex', alignItems: 'flex-end',fontSize:'1rem'}}>
                <CardPrice price={25750} discount={10}/>
            </CardActions>
      </ListItem>
      <Divider component="li" />
    </List>
    </Card>
</ReactCardFlip>
    )
  }
}
export default FlipGoldenCard;