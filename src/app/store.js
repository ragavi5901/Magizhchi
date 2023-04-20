import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import customerReducer from "../features/cutomers/customerSlice";
import productReducer from "../features/products/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bcategory/bcategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
  },
});
