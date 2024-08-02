import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DataState {
  data: any;
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
}

const initialState: DataState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("./public/data.json");
  return response.data;
});
