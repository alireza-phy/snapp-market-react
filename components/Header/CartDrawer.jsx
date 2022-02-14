import { connect } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import PN from "persian-number";
import {
  Drawer,
  List,
  Box,
  Typography,
  Button,
  Badge,
  Link,
} from "@mui/material";
import {
  Close,
  CloseSharp,
  Lens,
  IconButton,
  MenuIcon,
} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import AddIcon from "@mui/icons-material/Add";
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
    CartProductList: state.productDetailsToCartReducer.CartProductList,
  };
}
const mapDispatchToProps = {
  incerementCounter,
  decrementCounter,
  finallDec,
  finallInc,
};
const CartDrawer = (props) => {
  const { openCart, onCloseCart } = props;
  function incerementhandler(item) {
    let discountPrice =
      item.price -
      item.price * (item.discount / 100);
    props.incerementCounter(1);
    props.finallInc(discountPrice);
  }
  function decrementHandler(item) {
    let discountPrice =
      item.price -
      item.price * (item.discount / 100);

    props.decrementCounter(1);
    props.finallDec(discountPrice);
  }
  const drawerCartWidth = 400;
  if (props.CartProductList.length > 0) {
    return (
      <Drawer
        variant="temporary"
        sx={{
          width: drawerCartWidth,
          flexShrink: 0,
          marginLeft: "0px",
          paddingLeft: "0px",
          "& .MuiPaper-root": {
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          "& .MuiDrawer-paper": {
            width: drawerCartWidth,
            boxSizing: "border-box",
          },
          "& .MuiDrawer-paperAnchorLeft": {
            transform: "perspective(500px) translateX(-100%)",
            transition: "transform 0.5s cubic-bezier(1,.99,.07,.55)",
          },
        }}
        anchor="left"
        open={openCart}
        onClose={() => onCloseCart(false)}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 10px 0px 10px",
              height: 50,
              boxShadow: "rgb(0 0 0 / 5%) 0px 0.2rem 1.5rem 0.2rem",
              borderBottom: "0.1rem solid rgb(244, 244, 244)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
                سبد خرید من
              </Typography>
              <Typography sx={{ margin: "0px 5px 0px 5px", fontSize: "" }}>
                {PN.convertEnToPe(1)} کالا
              </Typography>
              <DeleteOutlineOutlinedIcon
                sx={{
                  bgcolor: "#fff",
                  color: "rgb(41, 41, 41)",
                  fontSize: 30,
                  borderRadius: "100%",
                  cursor: "pointer",
                  p: 0.75,
                  ":hover": {
                    bgcolor: "rgba(254,249,249,1)",
                  },
                }}
              />
            </Box>
            <Close
              sx={{ color: "blue", fontWeight: "200", cursor: "pointer" }}
              onClick={() => onCloseCart(false)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
              backgroundColor: "rgb(255, 255, 255)",
              boxShadow: "rgb(3 0 0 / 16%) 0px 1.2rem 1.5rem 0.2rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.139"
              height="32.046"
              viewBox="0 0 44.139 32.046"
            >
              <g
                id="delivery-truck_1_"
                data-name="delivery-truck (1)"
                transform="translate(0.3 -68.867)"
              >
                <g
                  id="Group_468"
                  data-name="Group 468"
                  transform="translate(0 68.867)"
                >
                  <g
                    id="Group_467"
                    data-name="Group 467"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_193"
                      data-name="Path 193"
                      d="M35.491,79.112h-2.76l.832-9.548c0-.017,0-.034,0-.051,0,0,0,0,0,0h0a.642.642,0,0,0-.387-.588l-.006,0-.044-.016-.016-.006-.037-.01-.026-.006-.033-.005-.031,0H19.78a.642.642,0,1,0,0,1.284H32.222L30.944,84.825v0l-.322,3.7H8.307l.373-3.853h4.249a.642.642,0,1,0,0-1.284H8.8l.788-8.134h6.762a.642.642,0,1,0,0-1.284H9.717l.371-3.824h7.123a.642.642,0,1,0,0-1.284H9.5a.642.642,0,0,0-.627.507l0,.006c0,.016-.005.032-.008.049s0,.01,0,.015v0l-.439,4.528H.642a.642.642,0,1,0,0,1.284H8.3l-.788,8.134H5.223a.642.642,0,1,0,0,1.284H7.39l-.429,4.429v0L6.3,95.956v0c0,.009,0,.018,0,.027s0,.023,0,.035v0c0,.017,0,.033,0,.049s0,.01,0,.016,0,.033.008.049,0,.01,0,.014.006.024.009.036,0,.017.007.025l0,.007a.642.642,0,0,0,.153.251l0,0,.021.02a.636.636,0,0,0,.149.1l.034.016.011,0,.049.018h0l.058.015h.008c.019,0,.037.007.057.008h0q.032,0,.063,0H9.8a4.888,4.888,0,0,0,9.692,0h10.3a4.888,4.888,0,0,0,9.692,0h2.861c.021,0,.042,0,.063,0h.011l.05-.008.021,0,.038-.01.025-.008.031-.012.026-.011.028-.014.026-.014.026-.016.024-.016.026-.019.021-.017.026-.023.018-.017.026-.028.014-.016.027-.036.009-.012c.01-.016.02-.032.029-.048l0,0c.01-.018.019-.036.027-.055l.006-.016c.005-.013.01-.027.015-.04s0-.018.007-.027.006-.021.008-.032,0-.02.005-.029,0-.017,0-.026c.027-.218.53-4.253.755-6.861v-.008c.065-.752.106-1.385.106-1.773A8.358,8.358,0,0,0,35.491,79.112ZM32.619,80.4h2.627L34.91,84.25H32.283ZM14.642,99.628a3.605,3.605,0,1,1,3.605-3.605A3.609,3.609,0,0,1,14.642,99.628Zm19.992,0a3.605,3.605,0,1,1,3.605-3.605A3.609,3.609,0,0,1,34.634,99.628Zm7.138-4.248H39.48a4.888,4.888,0,0,0-9.692,0h-10.3a4.888,4.888,0,0,0-9.692,0H7.643l.539-5.566H31.211a.631.631,0,0,0,.064,0l.012,0,.05-.008.021-.005.038-.01.025-.009.032-.012.026-.012.028-.014.026-.015.026-.016.024-.017.025-.019.022-.018.024-.022.019-.019.023-.025.017-.02.021-.027.015-.021.018-.03.013-.023c.005-.01.01-.02.015-.031l.011-.025c0-.01.008-.02.011-.031s.007-.018.009-.028.005-.02.008-.03.005-.02.007-.031,0-.02,0-.031,0-.021,0-.032v0l.322-3.695H35.49c1.968,0,2.855,1.019,3.794,2.1A5.27,5.27,0,0,0,42.4,89.759C42.209,91.734,41.907,94.27,41.772,95.381Zm.734-6.908a4.2,4.2,0,0,1-2.253-1.683,6.031,6.031,0,0,0-4.057-2.5l.332-3.814a7.074,7.074,0,0,1,6.026,6.987C42.555,87.7,42.537,88.051,42.506,88.472Z"
                      transform="translate(0 -68.867)"
                      fill="#2446f5"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_470"
                  data-name="Group 470"
                  transform="translate(12.288 93.668)"
                >
                  <g id="Group_469" data-name="Group 469">
                    <path
                      id="Path_194"
                      data-name="Path 194"
                      d="M145.863,358.524a2.355,2.355,0,1,0,2.355,2.355A2.357,2.357,0,0,0,145.863,358.524Zm0,3.425a1.07,1.07,0,1,1,1.07-1.07A1.071,1.071,0,0,1,145.863,361.949Z"
                      transform="translate(-143.508 -358.524)"
                      fill="#07bc20"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_472"
                  data-name="Group 472"
                  transform="translate(32.28 93.668)"
                >
                  <g id="Group_471" data-name="Group 471">
                    <path
                      id="Path_195"
                      data-name="Path 195"
                      d="M379.35,358.524a2.355,2.355,0,1,0,2.355,2.355A2.357,2.357,0,0,0,379.35,358.524Zm0,3.425a1.07,1.07,0,1,1,1.07-1.07A1.072,1.072,0,0,1,379.35,361.949Z"
                      transform="translate(-376.996 -358.524)"
                      fill="#07bc20"
                    ></path>
                  </g>
                </g>
                <g
                  id="Group_474"
                  data-name="Group 474"
                  transform="translate(2.298 79.113)"
                >
                  <g id="Group_473" data-name="Group 473">
                    <path
                      id="Path_196"
                      data-name="Path 196"
                      d="M30.616,188.527H27.476a.642.642,0,1,0,0,1.284h3.139a.642.642,0,1,0,0-1.284Z"
                      transform="translate(-26.834 -188.527)"
                      fill="#2446f5"
                    ></path>
                  </g>
                </g>
                <line
                  id="Line_178"
                  data-name="Line 178"
                  x1="16"
                  transform="translate(0.5 74.517)"
                  fill="none"
                  stroke="#07bc20"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                ></line>
                <line
                  id="Line_179"
                  data-name="Line 179"
                  x1="4"
                  transform="translate(2.5 79.617)"
                  fill="none"
                  stroke="#07bc20"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                ></line>
                <line
                  id="Line_180"
                  data-name="Line 180"
                  x1="9"
                  transform="translate(4.5 84.067)"
                  fill="none"
                  stroke="#07bc20"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                ></line>
              </g>
            </svg>
            <Typography sx={{ color: "rgb(7, 188, 32)", marginRight: "13px" }}>
              هزینه ارسال رایگان خواهد بود
            </Typography>
          </Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {props.CartProductList.map((item) => (
              <Box
                sx={{
                  width: "100%",
                  height: "8rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <Link>
                  <img src={item.images[0].url} alt={item.name} width={70} />
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "50px",
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    {item.name}
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link sx={{ textDecoration: "none", marginTop: "20px" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Badge
                            sx={{
                              backgroundColor: "red",
                              borderRadius: "0.5rem",
                              padding: "3px",
                              color: "white",
                            }}
                          >
                            %{PN.convertEnToPe(item.discount)}
                          </Badge>
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              marginRight: "0.4rem",
                              textDecoration: "line-through",
                              color: "rgba(48, 53, 75, 0.4)",
                            }}
                          >
                            {PN.convertEnToPe(item.price)}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: "1.01rem",
                            color: "rgb(48, 53, 75)",
                            whiteSpace: "nowrap",
                            fontWeight: "400",
                            display: "flex",
                            paddingTop: "0.3rem",
                          }}
                        >
                          {PN.convertEnToPe(
                            PN.sliceNumber(
                              Math.floor(
                                item.price - item.price * (item.discount / 100)
                              )
                            )
                          )}
                          <Typography
                            component="span"
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: "200",
                              color: "rgba(48, 53, 75, 0.74)",
                            }}
                          >
                            {" "}
                            تومان
                          </Typography>
                        </Typography>
                      </Box>
                    </Link>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "flex-end",
                        marginRight: "8rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignSelf: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <RemoveIcon
                          sx={{
                            color: "rgb(36, 70, 245)",
                            width: "1.7rem",
                            height: "1.7rem",
                            border: "1px solid rgba(36, 70, 245, 0.12)",
                            boxShadow: "none",
                            borderWidth: "thin",
                            borderRadius: "50%",
                            cursor: "pointer",
                            ":hover": {
                              backgroundColor: "rgb(36, 70, 245)",
                              color: "white",
                            },
                          }}
                          onClick={() => decrementHandler(item)}
                        />
                        <Typography
                          sx={{
                            padding: "0px 5px 0px 5px",
                            fontSize: "1.7rem",
                            color: "rgb(36, 70, 245)",
                          }}
                        >
                          {PN.convertEnToPe(props.count)}
                        </Typography>
                        <AddIcon
                          sx={{
                            color: "rgb(36, 70, 245)",
                            width: "1.7rem",
                            height: "1.7rem",
                            border: "1px solid rgba(36, 70, 245, 0.12)",
                            boxShadow: "none",
                            borderWidth: "thin",
                            borderRadius: "50%",
                            cursor: "pointer",
                            ":hover": {
                              backgroundColor: "rgb(36, 70, 245)",
                              color: "white",
                            },
                          }}
                          onClick={() => incerementhandler(item)}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0rem 0.8rem 0rem 0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(242, 247, 255)",
              color: "rgb(36, 70, 245)",
              borderRadius: "0.5rem",
              padding: "7px",
              marginBottom: "0.4rem",
            }}
          >
            <Typography>حداقل مبلغ ثبت سفارش ۸۰,۰۰۰ تومان است.</Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: "rgb(7, 188, 32)",
              color: "rgb(255,255,255)",
              fontSize: "1.2rem",
              borderRadius: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              ":hover": {
                backgroundColor: "rgba(1,154,25,1)",
              },
            }}
          >
            ورود / عضویت
            <Typography
              sx={{
                color: "rgb(255,255,255)",
                position: "absolute",
                bottom: "0.5rem",
                left: "0.7rem",
                background: "rgba(0, 0, 0, 0.2)",
                padding: "0.2rem 0.8rem",
                fontSize: "1rem",
                borderRadius: "0.8rem !important",
                marginRight: "1rem !important",
              }}
            >
              {PN.convertEnToPe(props.finallPrice)} تومان
            </Typography>
          </Button>
        </Box>
      </Drawer>
    );
  } else {
    return (
      <Drawer
        variant="temporary"
        sx={{
          width: drawerCartWidth,
          flexShrink: 0,
          marginLeft: "0px",
          paddingLeft: "0px",
          "& .MuiDrawer-paper": {
            width: drawerCartWidth,
            boxSizing: "border-box",
          },
          "& .MuiDrawer-paperAnchorLeft": {
            transform: "perspective(500px) translateX(-100%)",
            transition: "transform 0.5s cubic-bezier(1,.99,.07,.55)",
          },
        }}
        anchor="left"
        open={openCart}
        onClose={() => onCloseCart(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 10px 0px 10px",
            height: 50,
            boxShadow: "rgb(0 0 0 / 16%) 0px 0.2rem 1.5rem 0.2rem",
            borderBottom: "0.1rem solid rgb(244, 244, 244)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
              سبد خرید من
            </Typography>
          </Box>
          <Close
            sx={{ color: "blue", fontWeight: "200", cursor: "pointer" }}
            onClick={() => onCloseCart(false)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 588.000000 378.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  class="sleepy-z"
                  style={{
                    position: "absolute",
                    fill: "rgb(16, 224, 44)",
                    animation:
                      "2.5s ease 0s infinite normal none running sleep-basket-box",
                    animationDelay: "400ms",
                    willChange: "transform, opacity",
                  }}
                  d="M2740 3150 c0 -18 7 -20 70 -20 40 0 70 -4 70 -10 0 -5 -34 -55 -75 -111 -41 -55 -75 -107 -75 -115 0 -11 22 -14 115 -14 96 0 115 3 115 15 0 18 2 17 -83 20 -37 1 -70 5 -74 8 -3 4 29 52 71 107 42 56 76 110 76 121 0 18 -8 19 -105 19 -98 0 -105 -1 -105 -20z"
                ></path>
                <path
                  class="sleepy-z"
                  style={{
                    position: "absolute",
                    animationDelay: "300ms",
                    fill: "rgb(16, 224, 44)",
                    animation:
                      "2.5s ease 0s infinite normal none running sleep-basket-box",
                    willChange: "transform, opacity",
                  }}
                  d="M3310 2575 c0 -12 13 -15 55 -15 30 0 55 -2 55 -5 0 -3 -27 -42 -60 -87 -33 -44 -60 -84 -60 -89 0 -5 41 -9 90 -9 73 0 90 3 90 15 0 12 -14 15 -65 15 l-66 0 61 79 c33 44 60 87 60 95 0 13 -14 16 -80 16 -64 0 -80 -3 -80 -15z"
                ></path>
                <path
                  class="sleepy-z"
                  style={{
                    position: "absolute",
                    animationDelay: "200ms",
                    fill: "rgb(16, 224, 44)",
                    animation:
                      "2.5s ease 0s infinite normal none running sleep-basket-box",
                    willChange: "transform, opacity",
                  }}
                  d="M2640 2286 c0 -10 14 -16 45 -18 l46 -3 -46 -63 c-59 -81 -55 -94 27 -90 78 4 95 28 19 28 -28 0 -51 3 -51 6 0 3 20 32 45 64 62 81 60 90 -20 90 -50 0 -65 -3 -65 -14z"
                ></path>
                <path
                  class="sleepy-z"
                  style={{
                    position: "absolute",
                    animationDelay: "100ms",
                    fill: "rgb(16, 224, 44)",
                    animation:
                      "2.5s ease 0s infinite normal none running sleep-basket-box",
                    willChange: "transform, opacity",
                  }}
                  d="M3065 1770 c3 -5 17 -10 31 -10 31 0 30 -4 -4 -49 -49 -62 -49 -61 14 -61 59 0 66 15 11 22 l-29 3 29 40 c49 67 49 65 -7 65 -32 0 -49 -4 -45 -10z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M1273 1963 c-38 -15 -7 -54 232 -293 l245 -245 0 -630 c0 -478 3 -634 12 -643 9 -9 327 -12 1370 -12 1332 0 1357 0 1368 19 6 13 10 233 10 643 l0 624 225 224 c124 124 228 233 231 243 3 10 0 25 -7 33 -10 12 -86 14 -553 12 l-541 -3 -225 -227 -224 -228 -396 0 -396 0 -244 245 -244 245 -426 -1 c-234 0 -431 -3 -437 -6z m1080 -301 l237 -238 -3 -604 -2 -605 -382 -3 -383 -2 0 600 0 600 254 0 c271 0 292 4 262 46 -13 18 -32 19 -278 22 l-263 3 -202 202 c-112 111 -203 205 -203 209 0 5 163 8 363 8 l363 0 237 -238z m2487 201 c0 -4 -84 -92 -187 -195 l-187 -188 -476 0 -475 0 195 195 195 195 467 0 c258 0 468 -3 468 -7z m-402 -1055 l2 -598 -895 0 -895 0 0 593 c0 327 3 597 7 600 3 4 405 6 892 5 l886 -3 3 -597z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M3224 1086 c-14 -35 57 -96 111 -96 28 0 101 45 110 69 11 27 -13 36 -37 14 -58 -53 -89 -54 -135 -8 -40 40 -42 40 -49 21z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M3738 1065 c-46 -43 -67 -44 -111 -5 -40 35 -57 38 -57 10 0 -25 74 -80 107 -80 51 0 129 62 117 93 -9 23 -14 22 -56 -18z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M3410 706 c-57 -16 -122 -50 -140 -71 -27 -33 9 -34 71 -3 118 58 224 58 352 0 55 -25 68 -28 77 -17 9 11 5 18 -22 35 -97 59 -243 84 -338 56z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M154 196 c-3 -8 -4 -23 -2 -33 3 -17 20 -18 224 -21 184 -2 223 0 233 12 9 11 10 20 1 35 -10 20 -19 21 -231 21 -182 0 -221 -2 -225 -14z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M739 194 c-9 -11 -10 -20 -2 -32 9 -15 48 -17 419 -17 l409 0 0 30 0 30 -406 3 c-362 2 -408 0 -420 -14z"
                ></path>
                <path
                  class="empty-box"
                  style={{ fill: "rgb(163, 163, 163)" }}
                  d="M4661 196 c-9 -11 -10 -20 -1 -35 11 -21 16 -21 474 -21 499 0 503 0 476 49 -11 21 -16 21 -474 21 -391 0 -465 -2 -475 -14z"
                ></path>
              </g>
            </svg>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
                سبد خرید شما خالی است :(
              </Typography>
          </Box>
        </Box>
      </Drawer>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer);
