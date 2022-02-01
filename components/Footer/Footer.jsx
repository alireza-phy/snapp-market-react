import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { blue, grey} from '@mui/material/colors';
// ---------icons--------------------
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// import { styled } from '@mui/material/styles';
// import { margin, width } from '@mui/system';

// const preventDefault = (event) => event.preventDefault();

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
    return (
      <Box sx={{width:'100%' , marginTop:20, backgroundColor:"white"}}>
        <Grid container alignItems="center" spacing={3}>
          
          
          
          {/* ------------------------section 1--------------------- */}
          
          
          
          <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1}}>
            <Item sx={{ order: 1 ,textAlign:"center", padding:2 }}>
                <Box sx={{ border:1, width:30, hight:30,borderColor: 'grey.100',borderRadius: 1}}>
                   <LoyaltyOutlinedIcon sx={{ color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4' sx={{ fontWeight: 'bold'}}>تخفیف بیشتر محصولات</Typography>
                <Typography variant="body1" color="gray"> کالاها با قیمت کمتر از درج شده ارسال می‌شود</Typography>
            </Item>
            <Item sx={{ order: 2 ,textAlign:"center", padding:2}}>
                <Box sx={{alignItems:"center",border:1, width:30, hight:30,borderColor: 'grey.100',borderRadius: 1 }}>
                    <LocalShippingOutlinedIcon sx={{ color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>ارسال به موقع سفارش‌ها</Typography >
                <Typography variant="body1" color="gray">سفارشات شما در زمان مقرر ارسال می‌شود</Typography>
            </Item>
            <Item sx={{ order: 3,textAlign:"center", padding:2 }}>
                <Box sx={{alignItems:"center",border:1, width:30, hight:30,borderColor: 'grey.100',borderRadius: 1 }}>
                    <Inventory2OutlinedIcon sx={{ color: blue[600] }}/>
                </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>ارسال بهترین کالاها</Typography >
                <Typography variant="body1" color="gray">محصولات ارسالی از بین بهترین‌ها گلچین می‌شود</Typography>
            </Item>
            <Item sx={{ order: 4 ,textAlign:"center", padding:2 }}>
                <Box sx={{alignItems:"center",border:1, width:30, hight:30,borderColor: 'grey.100',borderRadius: 1 }}>
                    <ShoppingBasketOutlinedIcon sx={{ color: blue[600] }}/>
                  </Box>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>بسته بندی مناسب</Typography>
                <Typography variant="body1" color="gray">سفارشات با بسته‌بندی مناسب ارسال می‌شود</Typography>
            </Item>
          </Box>
           
           
           
           
           
           {/* ------------------------section 2--------------------- */}
          
          
          
          
          <Grid item xs={6}>
              <Typography variant='h5' component='h3'sx={{ fontWeight: 'bold',mx:2}}>دانلود اپلیکیشن</Typography>
              <Typography variant='body2' color='gray' sx={{mx:2}}>
              اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید
              </Typography>
              <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 1 }}>
              <Item>
                 <a href='https://cafebazaar.ir/app/com.snappmarket'>
                   <img style={{width:125,hight:40}} src='https://snapp.market/v2/static/images/cb6ed78f4ae333f03abafb55a93bfecb.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                  <a href='https://play.google.com/store/apps/details?id=com.snappmarket'>
                    <img style={{width:125,hight:40}}  src='https://snapp.market/v2/static/images/3e883a26692319db4ce30e62421f48df.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                  <a href='https://sibapp.com/applications/snappmarket'>
                    <img style={{width:125,hight:40}}  src='https://snapp.market/v2/static/images/13144caef19879397aaca2b8453e09d5.png' alt=''></img>
                  </a>
              </Item>
              <Item>
                  <a href='https://iapps.ir/app/%D8%A7%D8%B3%D9%86%D9%BE-%D9%85%D8%A7%D8%B1%DA%A9%D8%AA-Snapp-Market/57404100'>
                    <img style={{width:125,hight:40}}   src='https://snapp.market/v2/static/images/b73e78b6652ebf0b5c4034fd17b91933.png' alt=''></img>
                  </a>
              </Item>
              </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{display: 'flex',flexDirection: 'row' }}>
                  <img  style={{width:275,hight:195}} src='https://snapp.market/v2/static/images/84a4e25131797a425d1b489e90a07ce1.png' alt=''></img>
                  <img style={{width:275,hight:195}} src='https://snapp.market/v2/static/images/4a44f07ae496a910ef1f505ed72e2087.png' alt=''></img>
            </Box>
          </Grid>
          {/* <Box><Divider variant="inset" /></Box> */}
           
           
           
           
           {/* ------------------------section 3--------------------- */}
          
          
          
          
          
          <Grid item xs={6}>
            <Box sx={{display: 'flex',flexWrap: 'nowrap',p: 1,m: 1}}>
              <Item sx={{ mx:2}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>درباره‌ما</Typography >
                <Typography variant='body1' component='p'color='gray'>اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
                            هایپر استار | مایلی</Typography>
            </Item>
            <Item sx={{ mx:2}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>دسترسی‌ها</Typography >
                <Box sx={{display: 'flex',flexDirection: 'column',typography: 'body1'}}>
                  <Link href='#'underline="none" color="gray">درباره‌ما</Link>
                  <Link href='#'underline="none" color="gray">وبلاگ</Link>
                  <Link href='#'underline="none" color="gray">قوانین</Link>
                  <Link href='#'underline="none"color="gray">استخدام</Link>
                  <Link href='#'underline="none"color="gray">گزارش مشکل</Link>
                </Box>
              </Item>
            <Item sx={{ mx:2}}>
                <Typography variant='h6' component='h4'sx={{ fontWeight: 'bold'}}>تماس با ما</Typography>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start',p: 1,m: 1}}>
                        <Typography variant='body1' component='span'color='gray'>تلفن:۰۲۱۹۶۶۱۲۶۰۰ </Typography >
                        <Typography variant='body1' component='span'color='gray'> آدرس: خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه</Typography>                                                             
                        <Typography variant='body1' component='span'color='gray'>ایمیل : info@snapp.market</Typography >
                        <Typography variant='body1' component='span'color='gray'>کد پستی:    ۱۹۶۷۸۶۵۶۳۱    </Typography>                       
                    </Box>
            </Item>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box sx={{display: 'flex',flexDirection: 'row',p: 1,m: 5}}>
                <Paper elevation={6} sx={{m:2,p:1,width: 128,height: 128}}>
                      <a href='https://logo.samandehi.ir/Verify.aspx?id=170271&p=rfthjyoeobpduiwkjyoerfth'>
                      <img style={{width:120,height:120}} src='https://fanavaraneomid.com/wp-content/uploads/2019/09/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%86%D9%85%D8%A7%D8%AF-%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%8C-%D8%A7%D9%85%DB%8C%D8%AF-%D8%A7%D8%AD%D9%85%D8%AF%DB%8C%D8%A7%D9%86%DB%8C.jpg'alt=''></img></a>
                </Paper>
                <Paper elevation={6} sx={{m:2,width: 128,height: 128}} >
                      <a href='https://trustseal.enamad.ir/?id=102454&code=uoLVRIdRPrQUVDTe'>
                      <img style={{width:120,hight:125}} src='https://cdn01.zoomit.ir/2020/4/cd30d311-e630-412b-adb8-fd38a69fc8f4.jpg?w=768' alt='' ></img></a>
                </Paper>
                <Paper elevation={6} sx={{m:2,width: 128,height: 128}}  >
                      <a href='https://ecunion.ir/verify/snapp.market?token=54552875ce10bd9cbbcd'>
                      <img  src='https://snapp.market/v2/static/images/70a7f8982e1c5e561c7620253876fa3f.png' alt='' ></img></a>
                </Paper>
              </Box>
            </Item>
          </Grid>
           
           
           
           
           {/* ------------------------section 4--------------------- */}
          
          
          
          <Box><Divider variant="middle" /></Box>
          <Box sx={{display: 'flex',flexDirection: 'row',verticalAlign: 'middle',p: 1,m: 1}}>
                  <Typography variant='caption' color='gray'>info@snapp.market</Typography>
                  <a href='https://twitter.com/snappmarket'><TwitterIcon sx={{ color: grey[400]}}/></a>
                  <a href='https://www.instagram.com/snappmarket/'><InstagramIcon sx={{ color: grey[400] }}/></a>
                  
            </Box>
        </Grid>
      </Box>
      
    );
  }
  
  export default Footer;