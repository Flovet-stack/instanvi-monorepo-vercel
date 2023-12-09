import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType, UserType } from '@/@types';

import { forgotPasswordByEmailThunk, loginThunk } from './actions/authActions';

export interface AuthState {
  user: UserType | null;
  authStatus: StatusType;
  resetRequestStatus: StatusType;
  resetPasswordStatus: StatusType;
  otpStatus: StatusType;
  message: string | null;
}

const initialState: AuthState = {
  user: null,
  authStatus: 'idle',
  resetRequestStatus: 'idle',
  resetPasswordStatus: 'idle',
  otpStatus: 'idle',
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
      state.resetRequestStatus = action.payload.resetRequestStatus;
      state.resetPasswordStatus = action.payload.resetPasswordStatus;
      state.otpStatus = action.payload.otpStatus;
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

    // forgot password by email action
    builder.addCase(forgotPasswordByEmailThunk.pending, (state) => {
      state.resetRequestStatus = 'loading';
    });
    builder.addCase(forgotPasswordByEmailThunk.fulfilled, (state, action) => {
      state.resetRequestStatus = 'idle';
      // state.user = action.payload;
    });
    builder.addCase(forgotPasswordByEmailThunk.rejected, (state) => {
      state.resetRequestStatus = 'failed';
    });
  },
});

export const { handleLogout, setAuthState } = authSlice.actions;
export default authSlice.reducer;
