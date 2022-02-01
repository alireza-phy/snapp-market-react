import React from "react";
import AssortmentOffer from "./AssortmentOffer";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
import Stack from "@mui/material/Stack";
import AssortmentCard from "./AssortmentCard";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider'
const AssortmentCardData = [
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ba7ea4f.png' ,
        title: 'آرایشی و بهداشتی',
        offer: '45'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a61baf7e1.png' ,
        title: 'میوه و سبزیجات تازه',
        offer: '25'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a63db458e.png' ,
        title: 'نوشیدنی',
        offer: '40'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a653eef12.png' ,
        title: 'مواد پروتئینی',
        offer: '30'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a66977ce3.png' ,
        title: 'تنقلات',
        offer: '40'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a67de1462.png' ,
        title: 'چاشنی و افزودنی',
        offer: '35'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a69760621.png' ,
        title: 'صبحانه',
        offer: '43'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6b6ba3c0.png' ,
        title: 'کنسرو، غذای آماده و منجمد',
        offer: '41'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6d29d1ad.png' ,
        title: 'کودک و نوزاد',
        offer: '44'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a6eaccc7d.png' ,
        title: 'خشکبار، دسر و شیرینی',
        offer: '40'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a7015b7b9.png' ,
        title: 'خانه و سبک زندگی',
        offer: '60'
    },
    {
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61ee70e70f503.png' ,
        title: 'لوازم برقی و دیجیتال',
        offer: '55'
    }
]

const AssortmentOfferData = [
    {
        offer:"۵۰",
        title:"دستمال و شوینده",
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png',
        bkGColor:"rgba(255, 203, 150, 0.27)",
        bordercolor:"rgba(255, 203, 150, 0.43)",
    },{
        offer:"۵۵",
        title:"لبنیات",
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ed7bb6d.png',
        bkGColor:"rgba(168, 224, 244, 0.25)",
        bordercolor:"rgba(168, 224, 244, 0.56)"
    },{
        offer:"۳۵",
        title:"خواربار و نان",
        img:'https://api.snapp.market/uploads/images/mobile-sliders/61e6a5ba7ea4f.png',
        bkGColor:"rgba(250, 237, 163, 0.31)",
        bordercolor:"rgba(250, 237, 163, 0.67)"
    }
]

const AssortmentMenu = () => {

    return (
        <Box>
            <Container sx={{marginY: "1rem", display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <Divider><h3>دسته بندی ها</h3></Divider>

                <Grid container spacing={2}>
                    {AssortmentOfferData.map(item => (
                    <AssortmentOffer
                        offer={item.offer}
                        title={item.title}
                        image={item.img}
                        bkGColor={item.bkGColor}
                        bordercolor={item.bordercolor}
                    />
                        )
                    )}
                </Grid>

                <Grid container spacing={2}>
                    {AssortmentCardData.map(item => (
                        <AssortmentCard
                            offer={item.offer}
                            title={item.title}
                            image={item.img}
                        />
                        )
                    )}
                </Grid>
            </Container>

        </Box>
    )
}

export default AssortmentMenu