import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CardAddToCartButton = ({quantity,incrementHandler,decrementHandler,maximumOrder}) => {
    return (
        <Box>
            {
                quantity === 0 ?
                    <Button onClick={incrementHandler} sx={{
                        flexGrow: '1',
                        px: 1.5,
                        borderRadius: '1rem',
                        transition: 'none',
                        ':hover': {
                            bgcolor: '#2446f5',
                            color: '#fff',
                        },
                    }} size='small'
                            variant="outlined">
                        افزودن به سبد
                    </Button>
                    :
                    <Box sx={{display: "flex", alignItems: 'center'}}>
                        {
                            quantity > 1
                                ?
                                <RemoveIcon sx={{
                                    bgcolor: '#fff',
                                    color: '#2446f5',
                                    fontSize: 30,
                                    borderRadius: '100%',
                                    border: 1,
                                    borderColor: 'grey.300',
                                    p: 0.75,
                                    ':hover': {
                                        bgcolor: '#2446f5',
                                        color: '#fff',
                                    },
                                }}
                                            onClick={decrementHandler}/> :
                                <DeleteOutlineOutlinedIcon sx={{
                                    bgcolor: '#fff',
                                    color: '#2446f5',
                                    fontSize: 30,
                                    borderRadius: '100%',
                                    p: 0.75,
                                    ':hover': {
                                        bgcolor: '#2446f5',
                                        color: '#fff',
                                    },
                                }}
                                                           onClick={decrementHandler}/>}
                        <Box sx={{display: 'flex', justifyContent: 'center', minWidth: 30}}>
                            <Typography variant="body1"
                                        component="span"
                                        sx={{color: '#2446f5'}}>
                                {quantity}
                            </Typography>
                        </Box>
                        {
                            maximumOrder === quantity
                                ?
                                <AddIcon
                                    disable
                                    sx={{
                                        bgcolor: '#fff',
                                        color: 'grey.500',
                                        fontSize: 30,
                                        borderRadius: '100%',
                                        border: 1,
                                        borderColor: 'grey.300',
                                        p: 0.75,
                                        cursor: 'not-allowed'
                                    }}/>
                                :
                                <AddIcon
                                    sx={{
                                        bgcolor: '#fff',
                                        color: '#2446f5',
                                        fontSize: 30,
                                        borderRadius: '100%',
                                        border: 1,
                                        borderColor: 'grey.300',
                                        p: 0.75,
                                        ':hover': {
                                            bgcolor: '#2446f5',
                                            color: '#fff',
                                        },
                                    }}
                                    onClick={incrementHandler}/>
                        }
                    </Box>
            }
        </Box>
    )
}
export default CardAddToCartButton