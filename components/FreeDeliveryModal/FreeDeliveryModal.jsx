import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ClearIcon from '@mui/icons-material/Clear';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {useState} from "react";
import delivery from './delivery.svg'

const theme = createTheme()
theme.typography.h6 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
    },
}
const FreeDeliveryModal = () => {
    const [showModal, setShowModal] = useState(true)
    const showModalHandler = () => {
        setShowModal(!showModal)
    }
    return (
        <Box sx={{direction: 'rtl', bgcolor: '#000'}}>
            {
                showModal
                &&
                <Container sx={{
                    py: {xs: 1, sm: 1.5, md: 1.5, xl: 1.5}
                }}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: {xs: 0, sm: 1, md: 2, xl: 2},
                            alignItems: 'center',
                            bgcolor: 'rgb(255, 186, 8)',
                            borderRadius: 1,
                            py: {xs: 2, sm: 0.5, md: 0.5, xl: 0.5},
                            pl: {xs: 2, sm: 0, md: 0, xl: 0}
                        }}>
                        <Box component='img' src={delivery.src} alt='delivery logo'
                             sx={{fill:'rgba(255, 249, 235, 0.3)' , width: {xs: 60, sm: 100, md: 100, xl: 100}}}/>
                        <ThemeProvider theme={theme}>
                            <Typography sx={{color:'black' , fontWeight: 600}} variant='h6' component='h2'>
                                هزینه ارسال اولین سفارش شما رایگان است
                            </Typography>
                        </ThemeProvider>
                        <ClearIcon onClick={showModalHandler}
                                   sx={{
                                       color: '#fff',
                                       fontSize: {xs: 25, sm: 30, md: 30, xl: 30},
                                       position: 'absolute',
                                       left: {xs: 0, sm: '2%', md: '2%', xl: '2%'},
                                       cursor: 'pointer'
                                   }}/>
                    </Box>
                </Container>
            }
        </Box>
    )
}
export default FreeDeliveryModal