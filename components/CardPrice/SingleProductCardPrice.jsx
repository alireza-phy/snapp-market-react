import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PN from "persian-number";

const SingleProductCardPrice = ({price, discount}) => {
    return (
        <Box sx={{flexGrow: '2' , float:'left'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                visibility: discount === null ? 'hidden' : 'visible'
            }}>
                <Typography variant="body2" component="p"
                            sx={{
                                ml: 0.55,
                                textDecoration: '#30354bbd line-through',
                                color: '#30354bbd'
                            }}>
                    {PN.convertEnToPe(PN.sliceNumber(price))}
                </Typography>
                <Typography sx={{
                    backgroundColor: 'rgb(66, 176, 41)',
                    color: 'white',
                    border: '1px solid rgb(36, 70, 245)',
                    borderRadius: '0.4rem',
                    px: .5,
                    py: .5
                }} variant="body2" component="span">
                    ٪{PN.convertEnToPe(discount)}
                </Typography>

            </Box>
            <Box sx={{mt: 0.75}}>
                <Typography variant="body2"
                            component="span">
                    {PN.convertEnToPe(PN.sliceNumber(Math.floor(price - price * (discount / 100))))}
                    تومان
                </Typography>
            </Box>
        </Box>
    )
}
export default SingleProductCardPrice