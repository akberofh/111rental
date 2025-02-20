import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await axios.get("http://localhost:5500/product")
    return res.data
})

export const postProducts = createAsyncThunk("products/postProducts", async (data) => {
    const res = await axios.post("http://localhost:5500/product", data)
    return res.data
})

export const deleteProducts = createAsyncThunk("products/deleteProducts", async (_id) =>{
    const res = await axios.delete("http://localhost:5500/product", {data: {_id}})
    return _id
})