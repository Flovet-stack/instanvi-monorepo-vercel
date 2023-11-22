import { StatusType, UserType } from '@/@types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: { user: UserType; token: string } | null;
  authStatus: StatusType;
  message: string | null;
}

const initialState: AuthState = {
  user: null,
  authStatus: 'idle',
  message: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (auth: UserType) => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return auth;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // authenticate and login
    handleLogin: (state: AuthState, action: PayloadAction<any>) => {
      // const { email, password } = action.payload;
    },

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
    setAuthUserState: (state: AuthState, action: PayloadAction<any>) => {
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
});

export const {
  handleLogin,
  handleLogout,
  setAuthState,
  setAuthStatus,
  setAuthUserState,
  setAuthMessage,
} = authSlice.actions;
export default authSlice.reducer;
