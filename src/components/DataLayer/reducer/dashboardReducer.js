import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../API/api";
import { endPoint } from "../../../API/endPoints";

const initialState = {
  dashboards: [],
  isLoading: false,
  isError: false,
};

export const getAllDashboards = createAsyncThunk(
  "get/dashboards",
  async (name, { rejectWithValue }) => {
    const response = await axiosInstance.get(endPoint.DASHBOARD);
    const data = response.data;
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const dashboardSlice = createSlice({
  name: "dashboards",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    builder.addCase(getAllDashboards.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    // When our request is fulfilled:
    builder.addCase(getAllDashboards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.dashboards = action.payload;
    });
    // When our request is rejected:

    builder.addCase(getAllDashboards.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default dashboardSlice.reducer;
