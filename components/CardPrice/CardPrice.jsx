import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PN from "persian-number";

const CardPrice = ({price, discount, Exdiscount=0}) => {

    console.log(Exdiscount)
    return (
        <Box sx={{flexGrow: '2'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Box sx={{display:'flex' , gap:'2px'}}>
                    {
                    Exdiscount !== 0
                        &&
                        <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:'2px'}}>

                            <Typography sx={{
                                backgroundColor: '#fff',
                                color: '#1934b6',
                                border: '1px solid #1934b6',
                                borderRadius: '0.4rem',
                                p: .5,
                            }} variant="body2" component="span">
                                {PN.convertEnToPe(Exdiscount)} ٪
                            </Typography>
                            <Typography>+</Typography>
                        </Box>
                    }
                    <Typography sx={{
                        backgroundColor: discount > 12 ? 'rgb(250, 15, 27)' : '#fff',
                        color: discount > 12 ? '#fff' : '#fa0f1b',
                        border: discount > 12 ? 'none' : '1px solid #fa0f1b',
                        borderRadius: '0.4rem',
                        p: .5,
                        visibility: discount === null ? 'hidden' : 'visible'
                    }} variant="body2" component="span">
                        {PN.convertEnToPe(discount)} ٪
                    </Typography>
                </Box>


                <Typography variant="body2" component="p"
                            sx={{
                                mr: 0.55,
                                textDecoration: '#30354bbd line-through',
                                color: '#30354bbd',
                                visibility: discount === null ? 'hidden' : 'visible'
                            }}>
                    {PN.convertEnToPe(PN.sliceNumber(price))}
                </Typography>
            </Box>
            <Box sx={{mt: 0.75}}>
                <Typography variant="body2"
                            component="span">
                    {PN.convertEnToPe(PN.sliceNumber(Math.floor(price - price * ((discount+Exdiscount) / 100))))}
                    تومان
                </Typography>
            </Box>
        </Box>
    )
}
export default CardPrice