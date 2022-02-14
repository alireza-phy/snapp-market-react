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
  p: 1,
  m: 1,
  [theme.breakpoints.between('sm','xl')]:{
    flexDirection: 'row',
    
  },
  [theme.breakpoints.down('sm')]:{
    flexDirection: 'column',
    
  },
}));

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
  [theme.breakpoints.between('sm','md')]:{
    gridTemplateColumns : 'repeat(2,2fr )',
    marginTop:'-3rem'},
  [theme.breakpoints.between('md','xl')]:{
    gridTemplateColumns : 'repeat(2,2fr )',
    marginTop:'-6rem',
  }
}));
const LogoBox = styled('div')(({theme}) =>({
  display: 'flex',
  p: 1,
  m: 1,
  [theme.breakpoints.up('sm')]:{
    flexDirection: 'row',
    // height:'40vh',
  },
  [theme.breakpoints.down('sm')]:{
    flexDirection: 'row',
    // height:'60vh',
  },
  [theme.breakpoints.up('md')]:{
    flexDirection: 'row',
    // height:'40vh',
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



function Footer({children}) {
  const theme = useTheme();
    return (
        <>
            {children}

      <Box sx={{marginTop:20, backgroundColor:"white",overFlow:'hidden'}}>
        <Grid container alignItems="center" spacing={3}>
          
          
          
          {/* ------------------------section 1--------------------- */}
          
          
        <Box1>
          <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1}}>
            <Item sx={{ order: 1 ,display: 'flex',flexDirection: 'column',alignItems:"center",textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center", border:1 ,width:65, height:65,borderColor: 'grey.100',borderRadius: 1}}>
                   <LoyaltyOutlinedIcon sx={{ width:30, height:30,margin:'auto' ,color: blue[400] }}/>
                </Box>
                <Typography variant='h6' component='h4' sx={{fontSize:'1rem'}}>تخفیف بیشتر محصولات</Typography>
                <Typography variant="body2" color="gray" sx={{fontSize:'0.8rem',marginTop:'0.3rem'}}> کالاها با قیمت کمتر از درج شده ارسال می‌شود</Typography>
            </Item>
            <Item sx={{ order: 2,display: 'flex',flexDirection: 'column',alignItems:"center" ,textAlign:"center", padding:2}}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:65, height:65,borderColor: 'grey.100',borderRadius: 1 }}>
                    <LocalShippingOutlinedIcon sx={{width:30, height:30,margin:'auto', color: blue[400] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{fontSize:'1rem'}}>ارسال به موقع سفارش‌ها</Typography >
                <Typography variant="body2" color="gray" sx={{fontSize:'0.8rem',marginTop:'0.3rem'}}>سفارشات شما در زمان مقرر ارسال می‌شود</Typography>
            </Item>
          </Box>
         <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1}}>
            <Item sx={{ order: 3,display: 'flex',flexDirection: 'column',alignItems:"center",textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:65, height:65,borderColor: 'grey.100',borderRadius: 1 }}>
                    <Inventory2OutlinedIcon sx={{width:30, height:30 ,marginRight:2.5 , color: blue[400] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{fontSize:'1rem'}}>ارسال بهترین کالاها</Typography >
                <Typography variant="body2" color="gray" sx={{fontSize:'0.8rem',marginTop:'0.3rem'}}>محصولات ارسالی از بین بهترین‌ها گلچین می‌شود</Typography>
            </Item>
            <Item sx={{ order: 4,display: 'flex',flexDirection: 'column',alignItems:"center" ,textAlign:"center", padding:2 }}>
                <Box sx={{display:'flex',alignItems:"center",border:1, width:65, height:65,borderColor: 'grey.100',borderRadius: 1 }}>
                    <ShoppingBasketOutlinedIcon sx={{width:30, height:30,margin:'auto', color: blue[400] }}/>
                  </Box>
                <Typography variant='h6' component='h4'sx={{fontSize:'1rem'}}>بسته بندی مناسب</Typography>
                <Typography variant="body2" color="gray" sx={{fontSize:'0.8rem',marginTop:'0.3rem'}}>سفارشات با بسته‌بندی مناسب ارسال می‌شود</Typography>
            </Item>
          </Box>
        </Box1>
           
           
           
           
           
           {/* ------------------------section 2--------------------- */}
          
          
          
          
      <Grid item md={5} sm={8} lg={5}>
          <Box sx={{ [theme.breakpoints.down('sm')]:{display: 'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}}>
              <Typography variant='h6' component='h4'sx={{ fontSize:'1rem',mx:2}}>دانلود اپلیکیشن</Typography>
              <Typography variant='body2' color='gray' sx={{mx:2,marginBottom:1}}>
              اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید
              </Typography>
          </Box>
           <Box sx={{display:'flex',
             [theme.breakpoints.up('md')]:{
               flexDirection:'row' ,
               },
               [theme.breakpoints.down('md')]:{
                flexDirection:'column',justifyContent:'center',alignItems:'center'}}}>
             <Box sx={{display: 'flex',flexDirection: 'row',mx: 1 }}>
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
             </Box>
             <Box  sx={{display: 'flex',flexDirection: 'row',[theme.breakpoints.between('md','xl')]:{marginRight:'-0.5rem'}}}>
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
          </Box>
      </Grid>
      <Grid item md={7} sm={6} lg={7}>
            <Box sx={{display: 'flex',flexDirection: 'row',my:10,[theme.breakpoints.down('sm')]:{display:'none'}}}>
                  <img  style={{width:'15rem',height:'10rem'}} src='https://snapp.market/v2/static/images/84a4e25131797a425d1b489e90a07ce1.png' alt=''></img>
                  <img style={{width:'15rem',height:'10rem',marginRight:'-6rem'}} src='https://snapp.market/v2/static/images/4a44f07ae496a910ef1f505ed72e2087.png' alt=''></img>
            </Box>
      </Grid>
          
           
           
           
           
           {/* ------------------------section 3--------------------- */}
          
          
          
          
        <Box3 sx={{ borderTop: 1, borderColor:'grey.100',backgroundColor:"white",[theme.breakpoints.down('md')]:{borderTop:'none'}}}>
          <Grid item md={7} sm={8} lg={8}>
              <Box sx={{display:'flex',flexDirection:'row',marginLeft:0}}>
              <Item md={3} lg={3} sx={{ width:'18vw', m:2,py:1,
            [theme.breakpoints.between('sm','xl')]:{
                display:'block'
                  },
            [theme.breakpoints.down('sm')]:{
              display:'none'
              }}}>
                <Typography variant='h6' component='h4'sx={{ fontSize:'1rem'}}>درباره‌ما</Typography >
                <Typography variant='body2' component='p'color='gray'sx={{lineHeight:'1.5rem',width:'18rem',marginTop:'1rem'}}>اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.</Typography>
                <Typography variant='body2' component='span'color='gray'sx={{lineHeight:'1.5rem',marginBottom:'1.5rem'}}>هایپر استار | مایلی</Typography>
            </Item>
            <Item sx={{width:'11vw', m:2,px:2}}>
                <Typography variant='h6' component='h4'sx={{ fontSize:'1rem',lineHeight:'1.5rem'}}>دسترسی‌ها</Typography >
                <Box sx={{display: 'flex',flexDirection: 'column',typography: 'body2',lineHeight:'1.5rem'}}>
                  <Link href='#'underline="none" color="gray">درباره‌ما</Link>
                  <Link href='#'underline="none" color="gray">وبلاگ</Link>
                  <Link href='#'underline="none" color="gray">قوانین</Link>
                  <Link href='#'underline="none"color="gray">استخدام</Link>
                  <Link href='#'underline="none"color="gray">گزارش مشکل</Link>
                </Box>
              </Item>
            <Item sx={{width:'18vw', m:2,px:2}}>
                <Typography variant='h6' component='h4'sx={{ fontSize:'1rem',lineHeight:'1.5rem'}}>تماس با ما</Typography>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start',p: 1,m: 1,width:'18vw'}}>
                        <Typography variant='body2' component='span'color='gray'sx={{lineHeight:'1.5rem'}}>تلفن:۰۲۱۹۶۶۱۲۶۰۰ </Typography >
                        <Typography variant='body2' component='span'color='gray' sx={{lineHeight:'1.5rem'}}> آدرس: خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه</Typography>
                        <Typography variant='body2' component='span'color='gray' sx={{lineHeight:'1.5rem'}}>ایمیل : info@snapp.market</Typography >
                        <Typography variant='body2' component='span'color='gray' sx={{lineHeight:'1.5rem'}}>کد پستی:    ۱۹۶۷۸۶۵۶۳۱    </Typography>
                    </Box>
                    <Box><Divider variant="middle"sx={{ 
                        [theme.breakpoints.up('sm')]:{display:'block'},
                        [theme.breakpoints.down('sm')]:{display:'none'},
                        [theme.breakpoints.up('md')]:{display:'block'}}} />
                     </Box>
                    <Box sx={{display: 'flex',flexDirection: 'row',justifyContent:'center',alignItems:"center",verticalAlign: 'middle',m:0}}>
                        <Typography variant='caption' color='gray' margin={1}>info@snapp.market</Typography>
                        <a href='https://twitter.com/snappmarket'><TwitterIcon sx={{width:17,height:21, color: grey[400],m:1}}/></a>
                        <a href='https://www.instagram.com/snappmarket/'><InstagramIcon sx={{width:17,height:21,m:1, color: grey[400] }}/></a>
                   </Box>
                </Item>
            </Box>
         </Grid>
          <Grid item md={5} sm={4} lg={4}>
            <Item>
            <LogoBox>
              <Box sx={{display: 'flex',flexDirection: 'row',justifyContent:'center',alignItems:'center',p: 1,marginBottom:0}}>
                <Paper elevation={6} sx={{py:2,m:1,width: '6rem',height: '6.5rem'}}>
                      <a href='https://logo.samandehi.ir/Verify.aspx?id=170271&p=rfthjyoeobpduiwkjyoerfth'>
                      <img style={{width:'5.5rem',height:'5.3rem',padding:'auto'}} src='https://fanavaraneomid.com/wp-content/uploads/2019/09/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%86%D9%85%D8%A7%D8%AF-%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%8C-%D8%A7%D9%85%DB%8C%D8%AF-%D8%A7%D8%AD%D9%85%D8%AF%DB%8C%D8%A7%D9%86%DB%8C.jpg'alt=''></img></a>
                </Paper>
                <Paper elevation={6} sx={{m:1,width: '6rem',height: '7rem'}} >
                      <a href='https://trustseal.enamad.ir/?id=102454&code=uoLVRIdRPrQUVDTe'>
                      <img style={{width:'5rem',height:'5.7rem',padding:'auto'}} src='https://cdn01.zoomit.ir/2020/4/cd30d311-e630-412b-adb8-fd38a69fc8f4.jpg?w=768' alt='' ></img></a>
                </Paper>
                <Paper elevation={6} sx={{p:1,m:1,width: '6rem',height: '6.7rem'}}  >
                      <a href='https://ecunion.ir/verify/snapp.market?token=54552875ce10bd9cbbcd'>
                      <img style={{width:'5rem',height:'5.5rem',padding:'auto'}} src='https://snapp.market/v2/static/images/70a7f8982e1c5e561c7620253876fa3f.png' alt='' ></img></a>
                </Paper>
              </Box>
            </LogoBox>
            </Item>
          </Grid>
          </Box3>
        </Grid>
      </Box>
        </>
    );
  }
  
  export default Footer;
  

