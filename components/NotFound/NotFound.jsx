import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const NotFound = () => {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'rtl',
            my: 3,
            py: 3,
        }} variant='outlined'>
            <Box>
                <Box component='img'
                     src='https://snapp.market/v2/static/images/071d37a6eb0305fff529efa194a7f354.png'
                     alt='not found'
                     sx={{width: 252}}
                />
            </Box>
            <Box>
                <Typography sx={{fontWeight: 600, mb: 3, mt: 1, textAlign: 'center'}} variant='h5' component='h1'>
                    صفحه‌ای که دنبالش بودی رو نداریم!
                </Typography>
            </Box>
            <Box>
                <Typography sx={{display: 'flex', alignItems: 'center', color: '#2446f5', fontWeight: 600}}
                            variant='body1'
                            component='p'>
                    ثبت سفارش
                    <KeyboardArrowLeftIcon/>
                </Typography>
            </Box>
        </Paper>
    )
}
export default NotFound