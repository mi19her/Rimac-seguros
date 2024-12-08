import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

// Thunk para consumir el API
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get<User>(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );
  return response.data;
});

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching user data";
      });
  },
});

export default userSlice.reducer;
