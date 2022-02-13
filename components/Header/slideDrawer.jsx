import {Drawer, List, ListItem, ListItemText, Box, Typography} from "@mui/material"
import {Close, CloseSharp, Lens} from "@mui/icons-material";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {AssortmentCardData , getSubCategory} from '../ProductData/ProductData'

const SlideDrawer = (props) => {
    const {open, onClose} = props;
    const listItem = ['لبنیات', 'خواربار و نان', 'دستمال و شوینده', 'تنقلات', 'نوشیدنی', 'مواد پروتئینی',
        'آرایشی و بهداشتی', 'چاشنی و افزودنی', 'میوه و سبزیجات تازه', 'کنسرو و غذای آماده', 'صبحانه',
        'خشکبار، دسر و شیرینی', 'خانه و سبک زندگی', 'لوازم برقی و دیجیتال', 'کودک و نوزاد'];


    const drawerWidth = 280;
    const theme = useTheme();

    console.log(getSubCategory('drinks'))
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',

                },

            }}

            anchor="top" open={open} onClose={() => onClose(false)}>
            <Box sx={{ display:"flex",height:120,justifyContent:"space-between",padding:"1rem"}}>
                <Close sx={{color:"gray"}}/>
                <Typography sx={{fontSize:'1.2rem', fontWeight:700,}}>دسته بندی ها</Typography>

            </Box>
            <List component="nav" sx={{overflow:"scroll"}}>
                {AssortmentCardData.map(item => (
                    <ListItem button key={item.titleEn} sx={{ display:"flex", flexDirection:"column",
                        alignItems:"flex-start", textAlign:"left"}}>
                        <Lens sx={{color: "lightblue", fontSize: "0.5rem"}}/>
                        <ListItemText primary={item.title}/>
                        {
                            getSubCategory(item.titleEn).map(group => (
                                <p sx={{display:'flex' , fontSize:'0.5rem' , color:'gray'}}
                                    key={group.id}

                                > {group.name} , </p>
                            ))}
                        {/*<ListItemText primary={"item"}/>*/}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SlideDrawer;