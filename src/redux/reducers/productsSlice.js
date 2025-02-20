import { createSlice } from '@reduxjs/toolkit'
import { deleteProducts, getProducts, postProducts } from '../thunks/products/thunk'
import { getWishs, postWishs, deleteWishs } from '../thunks/wish/wish'


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    wishlist: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
      .addCase(postProducts.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(item => item._id !== action.payload)
      })
      .addCase(getWishs.fulfilled, (state, action) => {
        state.basket = action.payload
      })
      .addCase(postWishs.fulfilled, (state, action) => {
        state.basket.push(action.payload)
      })
      .addCase(deleteWishs.fulfilled, (state, action) => {
        state.basket = state.basket.filter(item => item._id != action.payload)
      })
  }
})


export default productsSlice.reducer