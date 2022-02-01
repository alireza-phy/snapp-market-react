import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, CloseSharp, Lens} from "@mui/icons-material";
import {useState} from "react";

const SlideDrawer = (props) => {
    const {open, onClose} = props;
    const listItem = ['لبنیات', 'خواربار نان', 'دستمال و شوینده', 'تنقلات', 'نوشیدنی', 'مواد پروتئینی',
        'آرایشی و بهداشتی', 'چاشنی و افزودنی', 'میوه و سبزیجات تازه', 'کنسرو و غذای آماده', 'صبحانه',
        'خشکبار، دسر و شیرینی', 'خانه و سبک زندگی', 'لوازم برقی و دیجیتال', 'کودک و نوزاد'];

    const drawerWidth = 280;


    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },}}

            anchor="top" open={open} onClose={() => onClose(false)}>
            <Box sx={{ display:"flex",height:120,}}>
                <Typography >دسته بندی ها</Typography>
                <Close />
            </Box>
            <List component="nav" sx={{overflow:"scroll"}}>
                {listItem.map((item, index) => (
                    <ListItem button key={item} sx={{ display:"flex", flexDirection:"column",alignItems:"flex-start", textAlign:"left"}}>
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