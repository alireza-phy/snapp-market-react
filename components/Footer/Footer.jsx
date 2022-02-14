import * as React from 'react';
import {Paper,Box,Grid,Container,Typography, Link,Divider}  from '@mui/material';
import PropTypes from 'prop-types';
import { styled,useTheme, createTheme,ThemeProvider,responsiveFontSizes, makeStyles } from '@mui/material/styles';
// ---------icons--------------------
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// ---------colors--------------------
import { blue, grey} from '@mui/material/colors';
// ---------Tooltips--------------------
import TriggersTooltips,{handleTooltipOpen} from './iAppsTooltip';



{/* ------------------------section 1--------------------- */}

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

const Box1 = styled('div')(({theme}) =>({
  display: 'flex',
  flexDirection: 'row',
  p: 1,
  m: 1,
  // [theme.breakpoints.up('sm')]:{
  //   flexDirection: 'row',
    
  // },
  // [theme.breakpoints.down('sm')]:{
  //   flexDirection: 'column',
    
  // },
  // [theme.breakpoints.up('md')]:{
  //   flexDirection: 'row',
  // }
}))

const IconBox = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems:"center",
  textAlign:"center",
  padding:theme.spacing(2),
}));
const IconCard  = styled('div')(({theme}) => ({
  display:'flex',
  alignItems:"center",
  justifyContent:'center',
  width:'5rem',
  height:'5rem',
}));

const IconONE = styled('div')(({theme}) =>({
  width:'1.8rem',
  height:'1.8rem',
  margin:'auto',
  color: blue[600]
}));


const Box3 = styled('div')(({theme}) => ({
  display: 'grid',
  [theme.breakpoints.down('sm')]:{
    gridTemplateRows : 'repeat(2,2fr )',
  },
  [theme.breakpoints.between('sm','xl')]:{
    gridTemplateColumns : 'repeat(2,3fr )',
  }
}));
const LogoBox = styled('div')(({theme}) =>({
  display: 'flex',
  p: 1,
  m: 1,
  [theme.breakpoints.up('sm')]:{
    flexDirection: 'row',
    maxWidth:'100%',
    height:'40vh',
  },
  [theme.breakpoints.down('sm')]:{
    flexDirection: 'row',
    maxWidth:'100%',
    height:'60vh',
  },
  [theme.breakpoints.up('md')]:{
    flexDirection: 'row',
    maxWidth:'100%',
    height:'40vh',
  }
}));
const contactBox = styled('div')(({theme}) =>({
  [theme.breakpoints.down('sm')]:{
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.between('sm','xl')]:{
    display:'block',
    }}}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        ...sx,
      }}
      {...other}
      />
      );
    }

    Item.propTypes = {
      sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
      ]),
    };



function Footer() {
  const theme = useTheme();
    return (
      <Container sx={{marginTop:20, backgroundColor:"white",overFlow:'hidden'}}>
        <Grid container alignItems="center" spacing={3}>
          
          
          
          {/* ------------------------section 1--------------------- */}
          
          
          
          {/* <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1}}>
            <Item sx={{ order: 1 ,display: 'flex',flexDirection: 'column',alignItems:"center",textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center", border:1 ,width:70, height:70,borderColor: 'grey.100',borderRadius: 1}}>
                   <LoyaltyOutlinedIcon sx={{ width:30, height:30,marginRight:2.5 ,color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4' sx={{ fontWeight: 'bold'}}>تخفیف بیشتر محصولات</Typography>
                <Typography variant="body1" color="gray"> کالاها با قیمت کمتر از درج شده ارسال می‌شود</Typography>
            </Item>
            <Item sx={{ order: 2,display: 'flex',flexDirection: 'column',alignItems:"center" ,textAlign:"center", padding:2}}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:70, height:70,borderColor: 'grey.100',borderRadius: 1 }}>
                    <LocalShippingOutlinedIcon sx={{width:30, height:30,marginRight: 2.5 , color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>ارسال به موقع سفارش‌ها</Typography >
                <Typography variant="body1" color="gray">سفارشات شما در زمان مقرر ارسال می‌شود</Typography>
            </Item>
            <Item sx={{ order: 3,display: 'flex',flexDirection: 'column',alignItems:"center",textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:70, height:70,borderColor: 'grey.100',borderRadius: 1 }}>
                    <Inventory2OutlinedIcon sx={{width:30, height:30 ,marginRight:2.5 , color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>ارسال بهترین کالاها</Typography >
                <Typography variant="body1" color="gray">محصولات ارسالی از بین بهترین‌ها گلچین می‌شود</Typography>
            </Item>
            <Item sx={{ order: 4,display: 'flex',flexDirection: 'column',alignItems:"center" ,textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:70, height:70,borderColor: 'grey.100',borderRadius: 1 }}>
                    <ShoppingBasketOutlinedIcon sx={{width:30, height:30,marginRight: 2.5 , color: blue[600] }}/>
                  </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>بسته بندی مناسب</Typography>
                <Typography variant="body1" color="gray">سفارشات با بسته‌بندی مناسب ارسال می‌شود</Typography>
            </Item>
          </Box> */}
           
           
           
           
           
           {/* ------------------------section 2--------------------- */}
          
          
          
{/*           
          <Grid item xs={6}>
              <Typography variant='h5' component='h3'sx={{ fontWeight: 'bold',mx:2}}>دانلود اپلیکیشن</Typography>
              <Typography variant='body2' color='gray' sx={{mx:2}}>
              اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید
              </Typography>
              <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1 }}>
              <Item>
                 <a href='https://cafebazaar.ir/app/com.snappmarket'>
                   <img style={{width:125,height:40,margin:5}} src='https://snapp.market/v2/static/images/cb6ed78f4ae333f03abafb55a93bfecb.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                  <a href='https://play.google.com/store/apps/details?id=com.snappmarket'>
                    <img style={{width:125,height:40,margin:5}}  src='https://snapp.market/v2/static/images/3e883a26692319db4ce30e62421f48df.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                  <a href='https://sibapp.com/applications/snappmarket'>
                    <img style={{width:125,height:40,margin:5}}  src='https://snapp.market/v2/static/images/13144caef19879397aaca2b8453e09d5.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                <TriggersTooltips>
                   
                  </TriggersTooltips>
              </Item>
              </Box>
              
          </Grid>
          <Grid item xs={6}>
            <Box sx={{display: 'flex',flexDirection: 'row' }}>
                  <img  style={{width:275,height:190,marginRight:100}} src='https://snapp.market/v2/static/images/84a4e25131797a425d1b489e90a07ce1.png' alt=''></img>
                  <img style={{width:275,height:190,marginRight:-110}} src='https://snapp.market/v2/static/images/4a44f07ae496a910ef1f505ed72e2087.png' alt=''></img>
            </Box>
          </Grid> */}
          
           
           
           
           
           {/* ------------------------section 3--------------------- */}
          
          
          
          
        <Box3 sx={{ borderTop: 1, borderColor:'grey.100',marginTop:-3,backgroundColor:"white"}}>
          <Grid item md={8} sm={8} lg={12}>
              <Box sx={{display:'flex',flexDirection:'row',marginLeft:0}}>
              <Item md={3} lg={3} sx={{ width:'24vw',height:'15vh', m:2,py:1,lineHeight:'1.8rem',
            [theme.breakpoints.between('sm','xl')]:{
                display:'block'
                  },
            [theme.breakpoints.down('sm')]:{
              display:'none'
              }}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>درباره‌ما</Typography >
                <Typography variant='body1' component='p'color='gray'>اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.</Typography>
                <Typography variant='body1' component='span'color='gray'>هایپر استار | مایلی</Typography>
            </Item>
            <Item sx={{width:'12vw',height:'25vh', m:2,py:1,lineHeight:'2.8rem'}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>دسترسی‌ها</Typography >
                <Box sx={{display: 'flex',flexDirection: 'column',typography: 'body1'}}>
                  <Link href='#'underline="none" color="gray">درباره‌ما</Link>
                  <Link href='#'underline="none" color="gray">وبلاگ</Link>
                  <Link href='#'underline="none" color="gray">قوانین</Link>
                  <Link href='#'underline="none"color="gray">استخدام</Link>
                  <Link href='#'underline="none"color="gray">گزارش مشکل</Link>
                </Box>
              </Item>
            <Item sx={{width:'27vw',height:'25vh', m:2,py:1,lineHeight:'2.8rem'}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>تماس با ما</Typography>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start',p: 1,m: 1}}>
                        <Typography variant='body1' component='span'color='gray'>تلفن:۰۲۱۹۶۶۱۲۶۰۰ </Typography >
                        <Typography variant='body1' component='span'color='gray'> آدرس: خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه</Typography>                                                             
                        <Typography variant='body1' component='span'color='gray'>ایمیل : info@snapp.market</Typography >
                        <Typography variant='body1' component='span'color='gray'>کد پستی:    ۱۹۶۷۸۶۵۶۳۱    </Typography>                       
                    </Box>
                    <Box><Divider variant="middle"sx={{ 
                        [theme.breakpoints.up('sm')]:{display:'block'},
                        [theme.breakpoints.down('sm')]:{display:'none'},
                        [theme.breakpoints.up('md')]:{display:'block'}}} />
                     </Box>
                    <Box sx={{display: 'flex',flexDirection: 'row',alignItems:"center",verticalAlign: 'middle',m: 1}}>
                        <Typography variant='caption' color='gray'>info@snapp.market</Typography>
                        <a href='https://twitter.com/snappmarket'><TwitterIcon sx={{width:17,height:21, color: grey[400],m:1}}/></a>
                        <a href='https://www.instagram.com/snappmarket/'><InstagramIcon sx={{width:17,height:21,m:1, color: grey[400] }}/></a>
                   </Box>
                </Item>
            </Box>
         </Grid>
          <Grid item md={12} sm={8} lg={12}>
            <Item>
            <LogoBox>
              <Box sx={{display: 'flex',flexDirection: 'row',justifyContent:'center',alignItems:'center',p: 1,marginBottom:0}}>
                <Paper elevation={6} sx={{p:1,m:1,width: '8rem',height: '8rem'}}>
                      <a href='https://logo.samandehi.ir/Verify.aspx?id=170271&p=rfthjyoeobpduiwkjyoerfth'>
                      <img style={{width:'7.5rem',height:'6.2rem'}} src='https://fanavaraneomid.com/wp-content/uploads/2019/09/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%86%D9%85%D8%A7%D8%AF-%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%8C-%D8%A7%D9%85%DB%8C%D8%AF-%D8%A7%D8%AD%D9%85%D8%AF%DB%8C%D8%A7%D9%86%DB%8C.jpg'alt=''></img></a>
                </Paper>
                <Paper elevation={6} sx={{m:1,width: '8rem',height: '8rem'}} >
                      <a href='https://trustseal.enamad.ir/?id=102454&code=uoLVRIdRPrQUVDTe'>
                      <img style={{width:'7.5rem',height:'7.8rem'}} src='https://cdn01.zoomit.ir/2020/4/cd30d311-e630-412b-adb8-fd38a69fc8f4.jpg?w=768' alt='' ></img></a>
                </Paper>
                <Paper elevation={6} sx={{p:1,m:1,width: '8rem',height: '8rem'}}  >
                      <a href='https://ecunion.ir/verify/snapp.market?token=54552875ce10bd9cbbcd'>
                      <img  src='https://snapp.market/v2/static/images/70a7f8982e1c5e561c7620253876fa3f.png' alt='' ></img></a>
                </Paper>
              </Box>
            </LogoBox>
            </Item>
          </Grid>
          </Box3>
        </Grid>
      </Container>
      
    );
  }
  
  export default Footer;
  

