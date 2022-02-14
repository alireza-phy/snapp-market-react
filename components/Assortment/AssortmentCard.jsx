import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {SkewBox} from "./ClassComponents";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useRouter} from 'next/router';

const AssortmentCard = ({offer, title, image, categoryname }) => {

    const router = useRouter();

    function showCategoryHandler() {
        router.push('/categories/' + categoryname);
    }

    return (
        <Grid
            sx={{cursor:'pointer'}}
            onClick={showCategoryHandler}
            item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={0} sx={{
                backgroundColor: 'white',
                border: '0.1rem solid rgba(163, 163, 163, 0.25)',
                height: 'border-box',
                boxShadow: 'rgb(0 0 0 / 2%) 0px 0.2rem 0.7rem 0px',
            }}>
                <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"}>
                    <Box paddingY='1rem'>
                        <img width='70' src={image}
                             alt="Cleaner"/>
                    </Box>
                    <Box sx={{padding: '0.4rem' , display: 'flex' , flexDirection:'column' , alignItems:'center'}}>

                        <Typography variant="h2" fontSize={15} fontWeight={500} mb={2} gutterBottom component="div">
                            {title}
                        </Typography>

                        <SkewBox sx={{
                            background: 'rgba(21, 195, 42, 0.05)',
                            width: '6rem',
                            height: '1.6rem',
                            color: 'rgb(67, 203, 78)',
                            fontSize: '0.8rem',
                            fontWeight: '300',
                            borderRadius: '0.3rem',
                            marginBottom:'0rem'
                        }}>
                            <Box sx={{transform:'skew(10deg)'}}>
                                <Box component="span" > تخفیف تا </Box>
                                <Box component="span" > {offer}٪ </Box>
                            </Box>
                        </SkewBox>
                    </Box>
                </Stack>
            </Card>

        </Grid>
    )
}

export default AssortmentCard