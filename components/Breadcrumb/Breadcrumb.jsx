import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

const Breadcrumb = ({productCounter, group, category}) => {

    return (
        <Paper variant='outlined'
               sx={{
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   px: 1.5, py: 2,
                   mb: {xs: 6, sm: 2, md: 2, xl: 2},
               }}>
            <Box sx={{display: 'flex'}}>
                <Box sx={{display: 'flex', cursor: 'pointer'}}>
                    <HomeOutlinedIcon sx={{fontSize: 20, fontWeight: 500, ml: 0.5, color: '#404040'}}/>
                    <Typography component='span' variant='body1' sx={{color: '#404040'}}>
                        اسنپ مارکت
                    </Typography>
                </Box>
                <KeyboardArrowLeftOutlinedIcon sx={{color: 'gray', mx: 0.25}}/>
                <Typography component='span' variant='body1'
                            sx={{fontWeight: group ? 500 : 600, cursor: group && 'pointer'}}>
                    {category}
                </Typography>
                {
                    group
                    &&
                    <>
                        <KeyboardArrowLeftOutlinedIcon sx={{color: 'gray', mx: 0.25}}/>
                        <Typography component='span' variant='body1' sx={{fontWeight: 600}}>
                            {group}
                        </Typography>
                    </>
                }
            </Box>
            <Box>
                {
                    productCounter
                    &&
                    <Typography variant='body2' component='p'> {productCounter} کالا </Typography>
                }
            </Box>
        </Paper>
    )
}
export default Breadcrumb