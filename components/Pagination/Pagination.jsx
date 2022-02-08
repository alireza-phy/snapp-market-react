import React, {useState} from "react";
import Box from "@mui/material/Box"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography, Button} from "@mui/material";
import {GridViewOutlined, SwapVert} from "@mui/icons-material";
import {makeStyles} from '@mui/styles';
import ProductCard from "../ProductCard/ProductCard";
import {useTheme} from '@mui/material/styles';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideDrawer from "../Header/slideDrawer";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            backgroundColor: "#F2F7FF",
            "&:hover": {backgroundColor: "#2446F5", color: "#FFF"}
        }
    }
}));

const PaginationAndSort = ({productData}) => {
    const [products, setProducts] = useState([...productData])
    const classes = useStyles()

    //sorting
    const defaults = () =>{
        setProducts([...productData])
    }
    const maxDiscount = () => {
        setProducts([...productData].sort((a,b) => a.discount <= b.discount ? 1 : -1))
    }

    const maxDiscountAmount = () => {
        setProducts([...productData].sort(  (a,b) =>
            a.price - a.price * (1 - (a.discount / 100)) <= b.price - b.price * (1 - (b.discount / 100)) ? 1 : -1))

    }
     const inexpensiveHandler = () => {
         setProducts([...productData].sort((a,b) => a.price * (1 - (a.discount / 100)) >= b.price * (1 - (b.discount / 100)) ? 1 : -1))
    }

    const expensiveHandler = () => {
        setProducts([...productData].sort((a,b) => a.price * (1 - (a.discount / 100)) <= b.price * (1 - (b.discount / 100)) ? 1 : -1))
    }
    const theme = useTheme();
    return (
            <Box dir="rtl">
                <Grid item>
                    <Paper variant="outlined" sx={{display: {xs:"none", md:"flex"}, borderBottom: 0, borderRadius: '4px 4px 0 0 ',
                        padding:"0.5rem",
                        [theme.breakpoints.down('sm')]: {

                        },

                    }}>
                        <SwapVert sx={{fontSize: "2rem", color: "black"}}/>
                        <Typography sx={{color: "rgb(64, 64, 64)", fontWeight: 600}}>
                            مرتب سازی براساس:
                            <Button onClick={() => defaults()} sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"پیش فرض"}
                            </Button>
                            <Button sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"پرفروش ترین"}
                            </Button>
                            <Button onClick={() => maxDiscount()} sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"بیشترین درصد تخفیف"}
                            </Button>
                            <Button onClick={() => maxDiscountAmount()} sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"بیشترین مبلغ تخفیف"}
                            </Button>
                            <Button onClick={() => inexpensiveHandler()} sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"ارزان ترین"}
                            </Button>
                            <Button onClick={() => expensiveHandler()} sx={{
                                borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                    color: "#556FF7",
                                    backgroundColor: "#FFF",
                                }
                            }}>
                                {"گران ترین"}
                            </Button>
                        </Typography>
                    </Paper>
                    <Paper variant='outlined' sx={{borderRadius: 0, borderLeft: 0, borderTop: 0}}>
                        <Grid container xs={12}>
                            {
                                products.map((product) => (
                                    <Grid key={product.id} item xs={12} sm={4} md={4} lg={3} xl={3}>
                                        <ProductCard list
                                                     title={product.name}
                                                     price={product.price}
                                                     discount={product.discount}
                                                     available={product.inventory.available}
                                                     maximumOrder={product.MaximumOrder}
                                                     src={product.images[0].url}/>

                                    </Grid>
                                ))

                            }
                        </Grid>
                    </Paper>
                    <Paper variant='outlined' sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: ' 0 0 4px 4px',
                        borderTop: 0,
                        marginTop:"1.5rem"
                    }}>
                        <Stack spacing={2}>
                            <Pagination count={6} shape="rounded"
                                        classes={{ul: classes.ul}}
                                        sx={{margin: "1rem 0"}}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} sx={{display: {sm: "flex", md: "none"}, margin:"1.4rem 0",
                        borderBottom: 0, borderRadius: '4px 4px 0 0 ', alignItems:"center"}}>
                        <Grid item>
                            <Button sx={{color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem"}}>
                                فیلترها
                            </Button>
                        </Grid>
                        <Grid item>
                            <Box sx={{overflowX:"scroll"}}>
                                <Button onClick={() => defaults()} sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem",
                                    "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"پیش فرض"}
                                </Button>
                                <Button sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem", "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"پرفروش ترین"}
                                </Button>
                                <Button onClick={() => maxDiscount()} sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem", "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"بیشترین درصد تخفیف"}
                                </Button>
                                <Button onClick={() => maxDiscountAmount()} sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem", "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"بیشترین مبلغ تخفیف"}
                                </Button>
                                <Button onClick={() => inexpensiveHandler()} sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem", "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"ارزان ترین"}
                                </Button>
                                <Button onClick={() => expensiveHandler()} sx={{
                                    borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400,fontSize:"1.4rem", "&:hover": {
                                        color: "#556FF7",
                                        backgroundColor: "#FFF",
                                    }
                                }}>
                                    {"گران ترین"}
                                </Button>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
            </Box>
    );
}
export default PaginationAndSort;