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

// Getting All Data
export const getAllResearches = createAsyncThunk(
  "get/Researches",
  async (name, { rejectWithValue }) => {
    const response = await axiosInstance.get(
      `${endPoint.RESEARCH}token=${token}`
    );
    const data = response?.data;
    console.log(data);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

// Posting research Data
export const postResearches = createAsyncThunk(
  "post/Researches",
  async (researchData, { rejectWithValue }) => {
    const response = await axiosInstance.post(
      `${endPoint.RESEARCH}token=${token}`,
      researchData
    );
    const data = response?.data;
    console.log(data);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

// Updating a Research
export const updateResearches = createAsyncThunk(
  "update/Researches",
  async ([id, researchData], { rejectWithValue }) => {
    const response = await axiosInstance.put(
      `${endPoint.RESEARCH}token=${token}&id=${id}`,
      researchData
    );
    const data = response?.data;
    console.log(data);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

// Deleting a Research
export const deleteResearches = createAsyncThunk(
  "delete/Researches",
  async (id, { rejectWithValue }) => {
    const response = await axiosInstance.delete(
      `${endPoint.RESEARCH}token=${token}&id=${id}`
    );
    const data = response?.data;
    console.log(data);
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
    // Getting Researches
    builder.addCase(getAllResearches.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllResearches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.researches = action.payload;
    });
    builder.addCase(getAllResearches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Posting Researches
    builder.addCase(postResearches.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(postResearches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // state.researches = action.payload;
    });
    builder.addCase(postResearches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updating Researches
    builder.addCase(updateResearches.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(updateResearches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // state.researches = action.payload;
    });
    builder.addCase(updateResearches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    // deleting Researches
    builder.addCase(deleteResearches.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteResearches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // state.researches = action.payload;
    });
    builder.addCase(deleteResearches.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default researchSlice.reducer;
