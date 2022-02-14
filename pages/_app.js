import "../styles/globals.css";
import { makeServer } from "../library/mirage/index";
import HeaderAndFooter from "../components/HeaderAndFooter/HeaderAndFooter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { propsToClassKey } from "@mui/styles";
const initialState = {
  count: 0,
};
const initialFinallPrice = {
  finallPrice: 0,
};
const initialSingleCardCount = {
  SingleCardCount: 0,
};
const initialCartProductList = {
  CartProductList: [],
};
const rootReducer = combineReducers({
  finallPriceReducer,
  productCountReducer,
  singleCardCountReducer,
  productDetailsToCartReducer,
});
const store = createStore(rootReducer);
function finallPriceReducer(state = initialFinallPrice, action) {
  switch (action.type) {
    case "INCEREMENT":
      return { finallPrice: state.finallPrice + action.price };
    case "DECREMENT":
      return { finallPrice: state.finallPrice - action.price };
    default:
      return state;
  }
}
function productCountReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { count: (state.count += action.num) };
    case "DEC":
      return { count: (state.count -= action.num) };
    default:
      return state;
  }
}
function singleCardCountReducer(state = initialSingleCardCount, action) {
  switch (action.type) {
    case "SINGLEINC":
      return { SingleCardCount: (state.SingleCardCount += action.num) };
    case "SINGLEDEC":
      return { SingleCardCount: (state.SingleCardCount -= action.num) };
    default:
      return state;
  }
}

function productDetailsToCartReducer(state = initialCartProductList, action) {
  switch (action.type) {
    case "ADDTOCART":
      let CartProductListCopy = state.CartProductList;
      CartProductListCopy.push(action.data);
      return { CartProductList: CartProductListCopy };
    default:
      return state;
  }
}

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HeaderAndFooter>
            <Component {...pageProps} />
          </HeaderAndFooter>
        </ThemeProvider>
      </Provider>
  );
}

export default MyApp;
