import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close,Lens} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";

const SlideDrawer = (props) => {
    const {open, onClose} = props;
    const listItem = ['لبنیات', 'خواربار و نان', 'دستمال و شوینده', 'تنقلات', 'نوشیدنی', 'مواد پروتئینی',
        'آرایشی و بهداشتی', 'چاشنی و افزودنی', 'میوه و سبزیجات تازه', 'کنسرو و غذای آماده', 'صبحانه',
        'خشکبار، دسر و شیرینی', 'خانه و سبک زندگی', 'لوازم برقی و دیجیتال', 'کودک و نوزاد'];


    const drawerWidth = 280;
    const theme = useTheme();


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
            <Box sx={{display: "flex", height: 120, justifyContent: "space-between", padding: "1rem"}}>
                <Close sx={{color: "gray"}}/>
                <Typography sx={{fontSize: '1.2rem', fontWeight: 700,}}>دسته بندی ها</Typography>

            </Box>
            <List component="nav" sx={{overflow: "scroll"}}>
                {listItem.map((item, index) => (
                    <ListItem button key={item} sx={{
                        display: "flex", flexDirection: "column",
                        alignItems: "flex-start", textAlign: "left"
                    }}>
                        <Lens sx={{color: "lightblue", fontSize: "0.5rem"}}/>
                        <ListItemText primary={item}/>
                        <ListItemText primary={"item"}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SlideDrawer;