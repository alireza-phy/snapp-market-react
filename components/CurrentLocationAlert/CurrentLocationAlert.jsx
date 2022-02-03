import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import locationIcon from './img/locationLogo.png'

const CurrentLocationAlert = () => {
    return (
        <Paper sx={{direction: 'rtl', mt: 3, pr: {xs: 2, sm: 2, md: 1, xl: 1}, pl: 2, py: 2}}
               variant='outlined'>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {xs: 'center', sm: 'center', md: 'space-between', xl: 'space-between'},
                flexDirection: {xs: 'column', sm: 'row', md: 'row', xl: 'row'},
                gap: {xs: 0, sm: 2, md: 0, xl: 0}
            }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 2,
                    flexDirection: {xs: 'column', sm: 'row', md: 'row', xl: 'row'}
                }}>
                    {/*<Box>*/}
                    {/*    <FmdGoodOutlinedIcon sx={{fontSize: 60, color: 'rgb(36, 70, 245)'}}/>*/}
                    {/*</Box>*/}
                    <Box component='img' src={locationIcon} alt='location icon'/>
                    <Box>
                        <Box>
                            <Typography variant='h6' component='h3' sx={{textAlign: 'justify'}}>
                                شما در حال مشاهده کالاهای موجود در هایپراستار صبا هستید.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1' component='p' sx={{my: 1, textAlign: 'justify'}}>
                                برای مشاهده موجودی و قیمت دقیق کالاهای نزدیکترین فروشگاه به شما، ابتدا آدرس خود را
                                انتخاب کنید.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button variant='contained' sx={{width: 120, mt: {xs: 1.5, sm: 1.5, md: 0, xl: 0}}}>
                        <Typography sx={{fontWeight: 600}} variant='body1' component='p'>
                            تغییر آدرس
                        </Typography>
                        <KeyboardArrowLeftIcon/>
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}
export default CurrentLocationAlert