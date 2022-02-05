import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, CloseSharp, Lens} from "@mui/icons-material";
import theme from "../../styles/theme";


const CartDrawer = (props) => {
    const {openCart, onCloseCart} = props;

    const drawerCartWidth = 450;


    return (
        <Drawer
            sx={{
                width: drawerCartWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerCartWidth,
                    boxSizing: 'border-box',

                },
                // [theme.breakpoints.down( 'md')]: {
                //     display
                // },
            }}

            anchor="right" open={openCart} onClose={() => onCloseCart(false)}>
            <Box sx={{ display:"flex",height:50,boxShadow:2,}}>

                <Close sx={{color:"blue"}} />
                <Typography sx={{fontSize:'1.2rem', fontWeight:700,}} >سبد خرید من</Typography>
            </Box>
            <List component="nav" sx={{overflow:"scroll"}}>
                    <ListItem button >
                        <ListItemText>salam</ListItemText>

                    </ListItem>
            </List>
        </Drawer>
    );
};

export default CartDrawer;