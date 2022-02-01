import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, CloseSharp, Lens} from "@mui/icons-material";

const CartDrawer = (props) => {
    const {openCart, onCloseCart} = props;

    const drawerCartWidth = 300;


    return (
        <Drawer
            sx={{
                width: drawerCartWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerCartWidth,
                    boxSizing: 'border-box',
                },}}

            anchor="right" open={openCart} onClose={() => onCloseCart(false)}>
            <Box sx={{ display:"flex",height:120,}}>
                <Typography >دسته بندی ها</Typography>
                <Close />
            </Box>
            <List component="nav" sx={{overflow:"scroll"}}>
                    <ListItem button >
                        <ListItemText>salam</ListItemText>
                        <ListItemText>salam</ListItemText>
                        <ListItemText>salam</ListItemText>
                        <ListItemText>salam</ListItemText>
                        <ListItemText>salam</ListItemText>
                    </ListItem>
            </List>
        </Drawer>
    );
};

export default CartDrawer;