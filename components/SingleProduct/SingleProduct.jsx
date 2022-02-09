import SingleSlider from "../../components/SingleCardSliders/SingleCardSlider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SingleProductCardPrice from '../../components/CardPrice/SingleProductCardPrice'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

const SingleProduct = ({currentProduct}) => {

    return (
        <Container
            sx={{
                margin: "0 auto ",
                border: '0.1rem solid rgba(163, 163, 163, 0.25)',
                padding: "10px 20px 20px 20px",
                marginTop: "60px",
                backgroundColor: "white"
            }}
        >
            <Box
                sx={{
                    marginTop: "10px",
                    marginBottom: "50px",
                    display: "flex",
                    alignItems: "center",
                }}
                role="presentation"
            >
                <Breadcrumbs separator={<KeyboardArrowLeftOutlinedIcon fontSize="small"/>} aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{display: "flex", alignItems: "center"}}
                        color="inherit"
                        href="#"
                    >
                        <HomeIcon sx={{p: "2px", marginX: '5px'}}/>
                        اسنپ مارکت
                    </Link>
                    <Link
                        underline="hover"
                        sx={{display: "flex", alignItems: "center"}}
                        color="inherit"
                        href="#"
                    >
                        {currentProduct.categoryPe}
                    </Link>
                    <Link
                        underline="hover"
                        sx={{display: "flex", alignItems: "center"}}
                        color="inherit"
                        href="#"
                    >
                        {currentProduct.groupName}
                    </Link>

                    <Link
                        underline="hover"
                        sx={{display: "flex", alignItems: "center"}}
                        color="inherit"
                        href="#"
                    >
                        {currentProduct.groupName} {" "}
                        {currentProduct.brand.brandPe}

                    </Link>
                </Breadcrumbs>
            </Box>

            <Grid
                spacing={7}
                container
                direction="row"
                justifyContent="space-around"
                // alignItems="center"
                xs={12}
                columnSpacing={{xs: 1, sm: 2, md: 3}}
            >
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <SingleSlider
                        currentProduct={currentProduct}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderBottom: "1px dashed grey",
                        }}
                    >
                        <Typography
                            sx={{
                                paddingBottom: "20px",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                            }}
                            component="h2"
                        >
                            {currentProduct.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >

                            <Typography sx={{fontWeight: "bold"}} component="h2">
                                برند :
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgb(85,111,247)",
                                    paddingRight: "5px",
                                    fontWeight: "bold",
                                    paddingBottom: "15px",
                                }}
                            >
                                <Link sx={{textDecoration: "none"}} href="#">
                                    {currentProduct.brand.brandPe}
                                </Link>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Typography sx={{fontWeight: "bold"}} component="h2">
                                دسته بندی ها :
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgb(85,111,247)",
                                    fontWeight: "bold",
                                    paddingBottom: "15px",
                                    paddingRight: "5px",
                                }}
                            >
                                <Link sx={{textDecoration: "none"}} href="#">
                                    {currentProduct.groupName}
                                </Link>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                }}
                                component="h2"
                            >
                                فروشنده :
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgb(85,111,247)",
                                    fontWeight: "bold",
                                    paddingBottom: "10px",
                                    paddingRight: "5px",
                                }}
                            >
                                {currentProduct.seller}

                            </Typography>
                        </Box>
                        <Box
                            sx={{display: 'flex'}}>
                            {currentProduct.tags.map(item =>
                                <Typography
                                    key={item.id}
                                    sx={{
                                        backgroundColor: 'rgb(250, 250, 250)',
                                        borderColor: 'rgb(250, 250, 250)',
                                        color: 'rgb(117, 117, 117)',
                                        borderRadius: "0.8rem",
                                        px: 1.2,
                                        py: .4,
                                        m: 0.8
                                    }} variant="body2" component="span">
                                    {item.name}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                paddingTop: "15px",
                                fontWeight: "bold",
                            }}
                            component="h2"
                        >
                            قیمت مصرف کننده :
                        </Typography>
                    </Box>
                    <SingleProductCardPrice
                        price={currentProduct.price}
                        discount={currentProduct.discount}
                    />
                    <Button
                        variant="outlined"
                        sx={{
                            width: "100%",
                            color: "rgb(11, 153, 30)",
                            border: '0.1rem solid rgb(16, 224, 44)',
                            fontSize: '1.1rem',
                            p: 1.25,
                            "&:hover": {
                                color: "white",
                                backgroundColor: "rgb(5, 139, 24)",
                            },
                        }}
                    >
                        افزودن به سبد
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleProduct;
