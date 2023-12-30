import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@instanvi/client';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //set auth state
    AuthState: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },

    //set user state
    setUserState: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllCountriesThunk.pending, (state) => {
    //   state.authStatus = 'loading';
    // });
    // builder.addCase(getAllCountriesThunk.fulfilled, (state, action) => {
    //   state.authStatus = 'idle';
    // });
    // builder.addCase(getAllCountriesThunk.rejected, (state) => {
    //   state.authStatus = 'failed';
    // });
  },
});

export const { AuthState, setUserState } = authSlice.actions;

export default authSlice.reducer;
