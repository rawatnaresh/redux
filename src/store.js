import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./reducers/cartSlice";
import loginSliceReducer from "./reducers/loginSlice";


export default configureStore({
  reducer: {
    carts:  cartSliceReducer,
    login: loginSliceReducer
  }
})