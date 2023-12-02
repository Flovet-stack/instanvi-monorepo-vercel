import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType, UserType } from '@/@types';

import { loginThunk } from './actions/authActions';

export interface AuthState {
  user: UserType | null;
  authStatus: StatusType;
  message: string | null;
}

const initialState: AuthState = {
  user: null,
  authStatus: 'idle',
  message: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleLogout: (state: AuthState) => {
      state.user = null;
    },

    //set auth state
    setAuthState: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.authStatus = action.payload.authStatus;
      state.message = action.payload.message;
    },

    //set auth user state
    setAuthUserState: (state: AuthState, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },

    // set Loading state
    setAuthStatus: (state: AuthState, action: PayloadAction<StatusType>) => {
      state.authStatus = action.payload;
    },

    // set Loading state
    setAuthMessage: (state: AuthState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.authStatus = 'loading';
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.authStatus = 'idle';
      state.user = action.payload;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.authStatus = 'failed';
    });
  },
});

export const {
  handleLogout,
  setAuthState,
  setAuthStatus,
  setAuthUserState,
  setAuthMessage,
} = authSlice.actions;
export default authSlice.reducer;
