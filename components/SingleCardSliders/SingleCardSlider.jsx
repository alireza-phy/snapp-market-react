import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, CloseSharp, Lens} from "@mui/icons-material";
import theme from "../../styles/theme";
import ProductCard from '../../components/ProductCard/ProductCard'

const CartDrawer = (props) => {
    const {openCart, onCloseCart} = props;

    const drawerCartWidth = 400;

    const data = {
        id: 12,
        name: 'شیر کاکائو کاله ۲۰۰ میلی لیتری',
        brand: {
            brandEn: 'kalleh',
            brandPe: 'کاله',
        },
        images: [
            {
                id: 1,
                url: 'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-106673-a.jpg'
            }
        ],
        category: {
            categoryEn: 'dairy-product',
            categoryPe: 'لبنیات'
        },
        group: {
            groupId: 1,
            groupName: 'شیر'
        },
        inventory: {
            available: true,
            quantity: 12,
        },
        seller: 'هایپر استار',
        tags: [
            {id: 1, name: 'کاکائو'}
        ],
        price: 6000,
        discount: 5,
        MaximumOrder: 6
    }
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

            anchor="left" open={openCart} onClose={() => onCloseCart(false)}>
            <Box sx={{display: "flex", height: 50, boxShadow: 2,}}>
                <Close sx={{color: "blue"}}/>
                <Typography sx={{fontSize: '1.2rem', fontWeight: 700,}}>سبد خرید من</Typography>
            </Box>
            <List component="nav" sx={{overflowY: "auto"}}>
                <ListItem button sx={{p: 0, mb: 1, borderBottom: 1, borderColor: 'grey.200'}}>
                    <ListItemText sx={{p: 0, m: 0}}>
                        <ProductCard
                            cart
                            title={data.name}
                            price={data.price}
                            discount={data.discount}
                            available={data.inventory.available}
                            maximumOrder={data.MaximumOrder}
                            src={'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-106673-a.jpg'}/>
                    </ListItemText>
                </ListItem>
                <ListItem button sx={{p: 0, mb: 1, borderBottom: 1, borderColor: 'grey.200'}}>
                    <ListItemText sx={{p: 0, m: 0}}>
                        <ProductCard
                            cart
                            title={data.name}
                            price={data.price}
                            discount={data.discount}
                            available={data.inventory.available}
                            maximumOrder={data.MaximumOrder}
                            src={'https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-106673-a.jpg'}/>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default CartDrawer;