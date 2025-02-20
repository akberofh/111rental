import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishs = createAsyncThunk("carts/getCarts", async () => {
    const res = await axios.get("http://localhost:5500/wishlist")
    return res.data
})

export const postWishs = createAsyncThunk("carts/postCarts", async (data) => {
    const res = await axios.post("http://localhost:5500/wishlist",data)
    return res.data
})

export const deleteWishs = createAsyncThunk("carts/deleteCarts", async (_id) =>{
    const res = await axios.delete("http://localhost:5500/wishlist", {data: {_id}})
    return _id
})