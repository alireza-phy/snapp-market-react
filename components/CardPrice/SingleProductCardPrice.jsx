import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PN from "persian-number";

const SingleProductCardPrice = ({price, discount}) => {
    return (
        <Box sx={{flexGrow: '2' , float:'left' , display:'flex' , flexDirection:'column' , alignItems:'flex-end'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                visibility: discount === null ? 'hidden' : 'visible'
            }}>
                <Typography variant="h6" component="p"
                            sx={{
                                ml: 0.7,
                                textDecoration: '#30354bbd line-through',
                                color: '#30354bbd'
                            }}>
                    {PN.convertEnToPe(PN.sliceNumber(price))}
                </Typography>
                <Typography sx={{
                    backgroundColor: 'rgb(66, 176, 41)',
                    color: 'white',
                    borderRadius: '0.8rem',
                    px: 1,
                    py: .2,
                }} variant="body2" component="span">

                    {PN.convertEnToPe(discount)}
                    ٪
                </Typography>

            </Box>
            <Box sx={{marginY:1.5}}>
                <Typography variant="h5"
                            component="span">
                    {PN.convertEnToPe(PN.sliceNumber(Math.floor(price - price * (discount / 100))))}
                    تومان
                </Typography>
            </Box>
        </Box>
    )
}
export default SingleProductCardPrice