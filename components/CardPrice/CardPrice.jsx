import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const CardPrice = ({price, discount}) => {
    return (
        <Box sx={{flexGrow: '2'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                visibility: discount === null ? 'hidden' : 'visible'
            }}>
                <Typography sx={{
                    backgroundColor: discount > 12 ? 'rgb(250, 15, 27)' : '#fff',
                    color: discount > 12 ? '#fff' : '#fa0f1b',
                    border: discount > 12 ? 'none' : '1px solid #fa0f1b',
                    borderRadius: '0.4rem',
                    px: .75,
                    py: .75
                }} variant="body2" component="span">
                    %{discount}
                </Typography>
                <Typography variant="body2" component="p"
                            sx={{
                                mr: 0.55,
                                textDecoration: '#30354bbd line-through',
                                color: '#30354bbd'
                            }}>
                    {price}
                </Typography>
            </Box>
            <Box sx={{mt: 0.75}}>
                <Typography variant="body2"
                            component="span">
                    {Math.floor(price - price * (discount / 100))} تومان
                </Typography>
            </Box>
        </Box>
    )
}
export default CardPrice