import { StatusType } from '@/@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BroadcastState {
  user: null;
  broadcastStatus: StatusType;
  message: string | null;
}

const initialState: BroadcastState = {
  user: null,
  broadcastStatus: 'idle',
  message: null,
};

export const broadcastSlice = createSlice({
  name: 'broadcast',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //set broadcast state
    setBroadcastState: (
      state: BroadcastState,
      action: PayloadAction<BroadcastState>
    ) => {
      state.user = action.payload.user;
      state.broadcastStatus = action.payload.broadcastStatus;
      state.message = action.payload.message;
    },
  },
});

export const { setBroadcastState } = broadcastSlice.actions;
export default broadcastSlice.reducer;
