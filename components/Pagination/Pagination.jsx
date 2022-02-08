import React, {useState} from "react";
import Box from "@mui/material/Box"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography, Button} from "@mui/material";
import {SwapVert} from "@mui/icons-material";
import {makeStyles} from '@mui/styles';
import ProductCard from "../ProductCard/ProductCard";

// const sort = ["پیش فرض", "پرفروش ترین", "بیشترین درصد تخفیف", "بیشترین مبلغ تخفیف", "ارزان ترین", "گران ترین"]
const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            backgroundColor: "#F2F7FF",
            "&:hover": {backgroundColor: "#2446F5", color: "#FFF"}
        }
    }
}));

const PaginationPage = ({productData}) => {
    const classes = useStyles()
    const pricesWithDiscount = productData.map((product) => (
        product.price * (1 - (product.discount / 100))))

    const prices = productData.map((product) => (
        product.price
    ))


    //sorting
    const maxDiscount = () => {

    }

    const maxDiscountAmount = () => {

    }

    const inexpensiveHandler = () => {

    }

    const expensiveHandler = () => {

    }
    return (
        <Box dir="rtl">
            <Grid item>
                <Paper variant="outlined" sx={{display: "flex", borderBottom: 0, borderRadius: '4px 4px 0 0 '}}>
                    <SwapVert sx={{fontSize: "2rem", color: "black"}}/>
                    <Typography sx={{color: "rgb(64, 64, 64)", fontWeight: 600}}>
                        مرتب سازی براساس:
                        <Button sx={{
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
                            {"ازران ترین"}
                        </Button>
                        <Button onClick={() => expensiveHandler()} sx={{
                            borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {
                                color: "#556FF7",
                                backgroundColor: "#FFF",
                            }
                        }}>
                            {"گران ترین"}
                        </Button>
                        {/*{sort.map(item => (*/}
                        {/*    <Button*/}
                        {/*        key={item} sx={{*/}
                        {/*        borderRadius: "5rem", color: "rgb(64, 64, 64)", fontWeight: 400, "&:hover": {*/}
                        {/*            color: "#556FF7",*/}
                        {/*            backgroundColor: "#FFF",*/}
                        {/*        }*/}
                        {/*    }}>*/}
                        {/*        {item}*/}
                        {/*    </Button>*/}
                        {/*))}*/}
                    </Typography>
                </Paper>
                <Paper variant='outlined' sx={{borderRadius: 0, borderLeft: 0, borderTop: 0}}>
                    <Grid container xs={12}>
                        {
                            productData.map((product) => (
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
                                    sx={{marginBottom: "1rem"}}
                        />
                    </Stack>
                </Paper>
            </Grid>
        </Box>
    );
}
export default PaginationPage;