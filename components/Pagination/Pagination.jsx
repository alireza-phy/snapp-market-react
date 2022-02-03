import React from "react";
import Box from "@mui/material/Box"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography,Button} from "@mui/material";
import {ImportExport, SwapVert} from "@mui/icons-material";
import { makeStyles } from '@mui/styles';


const sort = ["پیش فرض", "پرفروش ترین","بیشترین درصد تخفیف","بیشترین مبلغ خرید","ارزان ترین","گران ترین"]
const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            backgroundColor:"#F2F7FF",
            "&:hover":{backgroundColor:"#2446F5",color:"#FFF"}
        }
    }
}));

const PaginationPage = () => {
    const classes = useStyles();


    return(
        <Box dir="rtl">

            <Grid container columnSpacing={3}>
                <Grid item md={9} lg={9}>
                    <Paper elevation="1" variant="outlined" sx={{display:"flex",}}>
                        <SwapVert sx={{fontSize:"2rem",color:"black"}}/>
                        <Typography sx={{color:"rgb(64, 64, 64)",fontWeight:600}}>
                            مرتب سازی براساس:
                            {sort.map(item => (
                                <Button
                                    key={item} sx={{borderRadius:"5rem",color:"rgb(64, 64, 64)",fontWeight:400,"&:hover": {
                                        color: "#556FF7",
                                        backgroundColor:"#FFF",
                                    }}} >
                                    {item}
                                </Button>
                            ))}
                        </Typography>
                    </Paper>
                    <Paper elevation="1">
                        <Typography>CARDS</Typography>
                    </Paper>
                    <Paper sx={{display:"flex",alignItems:"center",justifyContent:"center", marginBottom:"1rem"}}>
                        <Stack spacing={2}>
                            <Pagination count={6} shape="rounded"
                                        classes={{ ul: classes.ul }}
                                         sx={{marginBottom:"1rem"}}

                            />
                        </Stack>
                    </Paper>
                </Grid>

            </Grid>


        </Box>
    );
}
export default PaginationPage;