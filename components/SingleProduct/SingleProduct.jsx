import PN from "persian-number";
import SingleSlider from "../SingleCardSliders/SingleCardSlider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductData from "../ProductData/ProductData";
import { connect } from "react-redux";
function incerementCounter(num) {
  return {
    type: "SINGLEINC",
    num: num,
  };
}
function decrementCounter(num) {
  return {
    type: "SINGLEDEC",
    num: num,
  };
}
function mapStateToProps(state) {
  return {
    count: state.productCountReducer.count,
    finallPrice: state.finallPriceReducer.finallPrice,
    SingleCardCount: state.singleCardCountReducer.SingleCardCount,
  };
}
const mapDispatchToProps = {
  incerementCounter,
  decrementCounter,
};
const SingleProduct = (props) => {
  console.log(props);
  const sampleProduct = {
    products: [
      {
        MaximumOrder: 4,
        brand: { brandEn: "pak", brandPe: "پاک" },
        category: { categoryEn: "dairy-products", categoryPe: "لبنیات" },
        discount: 14,
        group: { groupId: 1, groupName: "شیر" },
        id: "1",
        images: [
          {
            id: 1,
            url: "https://api.snapp.market/media/cache/product-varia…ploads/images/vendors/users/app/60cf1e4112f33.jpg",
          },
          {
            id: 2,
            url: "https://api.snapp.market/media/cache/product-varia…ploads/images/vendors/users/app/60cf1e671bbe9.jpg",
          },
        ],
        length: 2,
        inventory: { available: true, quantity: 9 },
        name: "شیر کم چرب غنی شده با ویتامین D پاک ۱ لیتری",
        price: 10900,
        seller: "هایپر استار",
        tags: [
          { id: 1, name: "کم چرب" },
          { id: 2, name: "ساده" },
        ],
      },
    ],
  };
  const [data, setData] = useState(sampleProduct);
  useEffect(async () => {
    await fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const incrementHandler = () => {
    props.incerementCounter(1);
  };
  const decrementHandler = () => {
    props.decrementCounter(1);
  };
  return (
    <Container
      sx={{
        margin: "0 auto ",
        border: "1px solid grey",
        padding: "10px 20px 20px 20px",
        marginTop: "60px",
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
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="#"
          >
            <HomeIcon sx={{ padding: "2px" }} />
            اسنپ مارکت
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="#"
          >
            {data.products[0].category.categoryPe}
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="#"
          >
            {data.products[0].group.groupName}
          </Link>

          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="#"
          >
            {data.products[0].category.categoryPe}{" "}
            {data.products[0].brand.brandPe}
          </Link>
        </Breadcrumbs>
      </Box>

      <Grid
        spacing={7}
        container
        xs={12}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <SingleSlider />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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
              component="h1"
            >
              {data.products[0].name}
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
                  {data.products[0].brand.brandPe}
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
                  {data.products[0].category.categoryPe}
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
                {data.products[0].seller}
              </Typography>
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
              {data.products[0].price} تومان
            </Typography>
          </Box>
          {props.SingleCardCount === 0 ? (
            <Button
              variant="outlined"
              onClick={incrementHandler}
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
              {props.SingleCardCount > 1 ? (
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
                  {PN.convertEnToPe(props.SingleCardCount)}
                </Typography>
              </Box>
              {ProductData[0].MaximumOrder === props.SingleCardCount ? (
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
