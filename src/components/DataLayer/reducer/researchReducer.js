import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../API/api";
import { endPoint } from "../../../API/endPoints";
import Cookie from "universal-cookie";

const initialState = {
  researches: [],
  isLoading: false,
  isError: false,
};

const cookie = new Cookie();

let token = cookie.get("storedAccessToken");

export const getAllResearches = createAsyncThunk(
  "get/Researches",
  async (name, { rejectWithValue }) => {
    const response = await axiosInstance.get(`${endPoint.RESEARCH}token=${token}`);
    const data = response?.data?.data;
    console.log(data)
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const researchSlice = createSlice({
  name: "researches",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    builder.addCase(getAllResearches.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    // When our request is fulfilled:
    builder.addCase(getAllResearches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.researches = action.payload;
    });
    // When our request is rejected:

    builder.addCase(getAllResearches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export default researchSlice.reducer;