import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, Lens} from "@mui/icons-material";
import {headerAssortmentData} from '../ProductData/ProductData'

const SlideDrawer = (props) => {
    const {open, onClose, slideDrawerModal} = props;

    const drawerWidth = 280;
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                display: {xs: 'block', md: 'none'}
            }}
            anchor="top" open={open} onClose={() => onClose(false)}>
            {
                slideDrawerModal
                ||
                <Box sx={{display: "flex", height: 120, justifyContent: "space-between", padding: "1rem", mx: 1}}>
                    <Typography sx={{fontSize: '1.2rem', fontWeight: 700,}}>دسته بندی ها</Typography>
                    <Close onClick={() => onClose(false)} sx={{color: "gray"}}/>
                </Box>
            }
            <List component="nav" sx={{overflow: "scroll", mx: 1.5}}>
                {headerAssortmentData.map((item, index) => (
                    <ListItem key={item.id} sx={{
                        display: "flex", flexDirection: "column",
                        alignItems: "flex-start", textAlign: "left"
                    }}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, color: "#2446f5"}}>
                            <Lens sx={{fontSize: 6, opacity: 0.5}}/>
                            <ListItemText primary={
                                <Typography
                                    variant="body2"
                                    component="p"
                                    sx={{fontWeight: 500}}
                                >
                                    {item.name}
                                </Typography>
                            }/>
                        </Box>
                        <ListItemText sx={{mr: 1.5}}>
                            <Typography
                                variant="body2"
                                component="p"
                                sx={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    height: 20,
                                    width: 150,
                                    whiteSpace: 'nowrap',
                                    color: '#a3a3a3'
                                }}
                            >
                                {
                                    item.groups.map((groups) => (
                                        <Typography key={groups.id} variant="body2"
                                                    component="span">
                                            {groups.group}،&nbsp;
                                        </Typography>
                                    ))
                                }
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SlideDrawer;