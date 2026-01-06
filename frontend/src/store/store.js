import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice/authSlice"
import adminProducsReducer from './admin/productSlice'
import shoppingProductReducer from "./shop/productSlice/shopProductSlice"



const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProducts : adminProducsReducer,
        shoppingProducts : shoppingProductReducer
    }
})

export default store