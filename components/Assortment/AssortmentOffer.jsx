import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {SkewBox} from "./ClassComponents";
import Box from "@mui/material/Box";
import {useRouter} from 'next/router';

const AssortmentOffer = ({offer, title, image, bkGColor, bordercolor, categoryname}) => {


    const router = useRouter();

    function showCategoryHandler() {
        router.push('/categories/' + categoryname);
    }

    return (
        <Grid
            sx={{cursor:'pointer'}}
            onClick={showCategoryHandler}
            item xs={12} md={6} lg={4}>
            <Card elevation={0} sx={{
                backgroundColor: bkGColor,
                border: `0.1rem solid ${bordercolor}`,
                height: 'border-box',
            }}>
                <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"}>
                    <div>
                        <img width={150} src={image}
                             alt="Cleaner"/>
                    </div>
                    <div>
                        <h3>
                            {title}
                        </h3>
                        <SkewBox sx={{
                            background: 'rgb(67, 203, 78)',
                            width: '7rem',
                            height: '2rem',
                            color: 'white',
                            marginTop: '1rem',
                            gap: '0.2rem',
                            fontSize: '0.9rem',
                            fontWeight: '400',
                            borderRadius: '0.5rem'
                        }}>
                            <Box sx={{transform:'skew(10deg)'}}>
                                <Box component="span" > تخفیف تا </Box>
                                <Box component="span" > {offer}٪ </Box>
                            </Box>
                        </SkewBox>
                    </div>
                    <ArrowBackIosIcon/>
                </Stack>
            </Card>

        </Grid>
    )
}

export default AssortmentOffer