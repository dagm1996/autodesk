import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../API/api";
import { endPoint } from "../../../API/endPoints";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
};

export const getAllBlogs = createAsyncThunk(
  "get/Blogs",
  async (name, { rejectWithValue }) => {
    const response = await axiosInstance.get(endPoint.BLOG);
    const data = response.data;
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const researchSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    builder.addCase(getAllBlogs.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    // When our request is fulfilled:
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.blogs = action.payload;
    });
    // When our request is rejected:

    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default researchSlice.reducer;
