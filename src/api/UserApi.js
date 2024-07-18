import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";


export const logIn = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/signin", data);
            console.log("result", response);
            const result = response.data;
            return result; //{} thong tin user
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


