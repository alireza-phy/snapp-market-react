import SingleSlider from "../../components/SingleCardSliders/SingleCardSlider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SingleProductCardPrice from "../../components/CardPrice/SingleProductCardPrice";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import PN from "persian-number";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { connect } from "react-redux";
function incerementCounter(num) {
    return {
        type: "INC",
        num: num,
    };
}
function decrementCounter(num) {
    return {
        type: "DEC",
        num: num,
    };
}
function singleDataToCart(data) {
    return {
        type: "ADDTOCART",
        data: data,
    };
}
function finallDec(price) {
  return {
    type: "DECREMENT",
    price: price,
  };
}
function finallInc(price) {
  return {
    type: "INCEREMENT",
    price: price,
  };
}
function mapStateToProps(state) {
    return {
        count: state.productCountReducer.count,
        finallPrice: state.finallPriceReducer.finallPrice,
        SingleCardCount: state.singleCardCountReducer.SingleCardCount,
        CartProductList: state.productDetailsToCartReducer.CartProductList,
    };
}
const mapDispatchToProps = {
    incerementCounter,
    decrementCounter,
    singleDataToCart,
    finallDec,
    finallInc,
};
const SingleProduct = (props) => {
    const incrementHandler = () => {
        props.incerementCounter(1);
        let discountPrice =
      props.currentProduct.price -
      props.currentProduct.price * (props.currentProduct.discount / 100);
        props.finallInc(discountPrice);
    };
    const decrementHandler = () => {
        props.decrementCounter(1);
        let discountPrice =
        props.currentProduct.price -
        props.currentProduct.price * (props.currentProduct.discount / 100);
          props.finallDec(discountPrice);
    };
    const addToCartHandler = () => {
      let discountPrice =
      props.currentProduct.price -
      props.currentProduct.price * (props.currentProduct.discount / 100);
        props.singleDataToCart(props.currentProduct);
        props.incerementCounter(1);
        props.finallInc(discountPrice);
    };
    return (
        <Container
            sx={{
                margin: "0 auto ",
                border: "0.1rem solid rgba(163, 163, 163, 0.25)",
                padding: "10px 20px 20px 20px",
                marginTop: "60px",
                backgroundColor: "white",
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
                <Breadcrumbs
                    separator={<KeyboardArrowLeftOutlinedIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="#"
                    >
                        <HomeIcon sx={{ p: "2px", marginX: "5px" }} />
                        اسنپ مارکت
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="#"
                    >
                        {props.currentProduct.categoryPe}
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="#"
                    >
                        {props.currentProduct.groupName}
                    </Link>

                    <Link
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="#"
                    >
                        {props.currentProduct.groupName}{" "}
                        {props.currentProduct.brand.brandPe}
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
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <SingleSlider currentProduct={props.currentProduct} />
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
                            {props.currentProduct.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold" }} component="h2">
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
                                <Link sx={{ textDecoration: "none" }} href="#">
                                    {props.currentProduct.brand.brandPe}
                                </Link>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold" }} component="h2">
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
                                <Link sx={{ textDecoration: "none" }} href="#">
                                    {props.currentProduct.groupName}
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
                                {props.currentProduct.seller}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            {props.currentProduct.tags.map((item) => (
                                <Typography
                                    key={item.id}
                                    sx={{
                                        backgroundColor: "rgb(250, 250, 250)",
                                        borderColor: "rgb(250, 250, 250)",
                                        color: "rgb(117, 117, 117)",
                                        borderRadius: "0.8rem",
                                        px: 1.2,
                                        py: 0.4,
                                        m: 0.8,
                                    }}
                                    variant="body2"
                                    component="span"
                                >
                                    {item.name}
                                </Typography>
                            ))}
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
                    <Box sx={{ marginBottom: "15px" }}>
                        <Typography
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                color: "rgb(117,117,117)",
                                fontWeight: "bold",
                                paddingBottom: "15px",
                                fontSize: "1.4rem",
                            }}
                            component="h2"
                        >
                            <SingleProductCardPrice
                                price={props.currentProduct.price}
                                discount={props.currentProduct.discount}
                            />
                        </Typography>
                    </Box>

                    {props.count === 0 ? (
                        <Button
                            variant="outlined"
                            onClick={addToCartHandler}
                            sx={{
                                width: "100%",
                                color: "rgb(7,188,32)",
                                borderColor: "rgb(7,188,32)",
                                fontWeight: "bold",
                                fontSize: "1.3rem",
                                "&:hover": {
                                    color: "white",
                                    borderColor: "rgb(7,188,32)",
                                    backgroundColor: "rgb(7,188,32)",
                                },
                            }}
                        >
                            افزودن به سبد
                        </Button>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row-reverse",
                                justifyContent: "center",
                            }}
                        >
                            {props.count > 1 ? (
                                <RemoveIcon
                                    sx={{
                                        background: "none",
                                        border: " 0.1rem solid rgb(7, 188, 32)",
                                        color: "rgb(7, 188, 32)",
                                        borderRadius: "0.3rem",
                                        cursor: "pointer",
                                        fontSize: "3rem",
                                        p: 0.75,
                                        ":hover": {
                                            backgroundColor: "rgb(5, 139, 24)",
                                            border: "none",
                                            color: "rgb(255, 255, 255)",
                                        },
                                        ":focus": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                        ":active": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                    }}
                                    onClick={decrementHandler}
                                />
                            ) : (
                                <DeleteOutlineOutlinedIcon
                                    sx={{
                                        background: "none",
                                        border: " 0.1rem solid rgb(7, 188, 32)",
                                        color: "rgb(7, 188, 32)",
                                        borderRadius: "0.3rem",
                                        cursor: "pointer",
                                        fontSize: "3rem",
                                        p: 0.75,
                                        ":hover": {
                                            backgroundColor: "rgb(5, 139, 24)",
                                            border: "none",
                                            color: "rgb(255, 255, 255)",
                                        },
                                        ":focus": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                        ":active": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                    }}
                                    onClick={decrementHandler}
                                />
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    minWidth: 30,
                                    width: "70%",
                                    margin: "0px 15px 0px 15px",
                                    border: " 0.1rem solid rgb(238, 238, 238)",
                                    borderRadius: "0.3rem",
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{ width: "100%", fontSize: "2rem", textAlign: "center" }}
                                >
                                    {PN.convertEnToPe(props.count)}
                                </Typography>
                            </Box>
                            {props.currentProduct.MaximumOrder === props.count ? (
                                <AddIcon
                                    disable
                                    sx={{
                                        cursor: " not-allowed",
                                        backgroundColor: "rgb(174, 240, 184) !important",
                                        color: "rgb(255, 255, 255)",
                                        background: "none",
                                        boxShadow: "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem",
                                        borderRadius: "0.3rem",
                                        fontSize: "3rem",
                                        p: 0.75,
                                    }}
                                />
                            ) : (
                                <AddIcon
                                    sx={{
                                        backgroundColor: "rgb(7,188,32)",
                                        border: " 0.1rem solid rgb(7, 188, 32)",
                                        color: "rgb(255,255,255)",
                                        borderRadius: "0.3rem",
                                        cursor: "pointer",
                                        fontSize: "3rem",
                                        p: 0.75,
                                        ":hover": {
                                            backgroundColor: "rgb(5, 139, 24)",
                                            border: "none",
                                            color: "rgb(255, 255, 255)",
                                        },
                                        ":focus": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                        ":active": {
                                            boxShadow:
                                                "rgb(7 188 32 / 50%) 0px 0px 1rem -0.1rem !important",
                                        },
                                    }}
                                    onClick={incrementHandler}
                                />
                            )}
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
