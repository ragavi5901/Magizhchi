import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";


// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../../features/auth/authSlice";
// import customerReducer from "../../features/cutomers/customerSlice";
// import productReducer from "../../features/product/productSlice";
// import brandReducer from "../../features/brand/brandSlice";
// import pCategoryReducer from "../../features/pcategory/pcategorySlice";
// import bCategoryReducer from "../../features/bcategory/bcategorySlice";
// import enquiryReducer from "../../features/enquiry/enquirySlice";
// import uploadReducer from "../../features/upload/uploadSlice";
// import couponReducer from "../../features/coupon/couponSlice";

const stores = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,

    // auth: authReducer,
    // customer: customerReducer,
    // product: productReducer,
    // brand: brandReducer,
    // pCategory: pCategoryReducer,
    // bCategory: bCategoryReducer,
    // enquiry: enquiryReducer,
    // upload: uploadReducer,
    // coupon: couponReducer,
  },
});

export default stores;
