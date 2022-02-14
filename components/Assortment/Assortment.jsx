import React from "react";
import AssortmentOffer from "./AssortmentOffer";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
import AssortmentCard from "./AssortmentCard";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import {AssortmentCardData} from '../../components/ProductData/ProductData'

const AssortmentMenu = () => {

    const [listHeight, setListHeight] = useState(120);

    const handleShowAssortment = () => {
        (listHeight === 120) ? setListHeight(400) : setListHeight(120)
    }

    return (
        <Box>
            <Container sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <Divider><h3>دسته بندی ها</h3></Divider>

                <Grid container spacing={2}>
                    {AssortmentCardData.map(item => (
                            <>
                                {
                                    (item.cardVarity === 'special')
                                    &&
                                    <AssortmentOffer
                                        key={item.title}
                                        offer={item.offer}
                                        title={item.title}
                                        image={item.img}
                                        categoryname={item.titleEn}
                                        bkGColor={item.bkGColor}
                                        bordercolor={item.bordercolor}
                                    />
                                }
                            </>
                        )
                    )}
                </Grid>
                <Box sx={{height: listHeight, overflow: 'hidden'}}>
                    <Grid container spacing={2}>
                        {AssortmentCardData.map(item => (
                                <>
                                    {
                                        (item.cardVarity === 'ordinary')
                                        &&
                                        <AssortmentCard key={item.title}
                                                        offer={item.offer}
                                                        title={item.title}
                                                        image={item.img}
                                                        categoryname={item.titleEn}
                                        />
                                    }
                                </>
                            )
                        )}
                    </Grid>
                </Box>

                <Box onClick={() => handleShowAssortment()}
                     sx={{cursor: 'pointer', width: 'fit-content', margin: 'auto' , overflowY:'auto' , overflowX:'hidden'}}>
                    {
                        (listHeight === 120) ?
                            <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, color: 'rgb(117, 117, 117)'}}>
                                <Typography variant="body1" fontSize={14} fontWeight={300}>
                                    مشاهده دسته بندی های بیشتر
                                </Typography>
                                <KeyboardDoubleArrowDownIcon fontSize="small"/>
                            </Box>
                            :
                            <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, color: 'rgb(117, 117, 117)'}}>
                                <Typography variant="body1" fontSize={14} fontWeight={300}>
                                    مشاهده دسته بندی های کمتر
                                </Typography>
                                <KeyboardDoubleArrowUpIcon fontSize="small"/>
                            </Box>
                    }
                </Box>

            </Container>

        </Box>
    )
}

export default AssortmentMenu