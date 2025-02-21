import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishs = createAsyncThunk("carts/getCarts", async () => {
    const res = await axios.get("https://rental111back-b5e17e75fe0f.herokuapp.com/wishlist")
    return res.data
})

export const postWishs = createAsyncThunk("carts/postCarts", async (data) => {
    const res = await axios.post("https://rental111back-b5e17e75fe0f.herokuapp.com/wishlist",data)
    return res.data
})

export const deleteWishs = createAsyncThunk("carts/deleteCarts", async (_id) =>{
    const res = await axios.delete("https://rental111back-b5e17e75fe0f.herokuapp.com/wishlist", {data: {_id}})
    return _id
})