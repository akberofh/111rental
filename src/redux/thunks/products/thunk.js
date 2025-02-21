import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await axios.get("https://rental111back-b5e17e75fe0f.herokuapp.com/product")
    return res.data
})

export const postProducts = createAsyncThunk("products/postProducts", async (data) => {
    const res = await axios.post("https://rental111back-b5e17e75fe0f.herokuapp.com/product", data)
    return res.data
})

export const deleteProducts = createAsyncThunk("products/deleteProducts", async (_id) =>{
    const res = await axios.delete("https://rental111back-b5e17e75fe0f.herokuapp.com/product", {data: {_id}})
    return _id
})