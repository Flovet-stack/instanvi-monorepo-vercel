import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { People } from '@instanvi/client';
import { StatusType } from 'apps/advertiser-dsp/app/@types/status-type';

export interface PeopleState {
  people: {
    data: People[] | null;
    status: StatusType;
  };
}

const initialState: PeopleState = {
  people: {
    data: null,
    status: 'idle',
  },
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //set people state
    PeopleState: (state: PeopleState, action: PayloadAction<PeopleState>) => {
      state.people = action.payload.people;
    },

    //set people state
    setPeopleDataState: (
      state: PeopleState,
      action: PayloadAction<People[]>
    ) => {
      state.people.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllCountriesThunk.pending, (state) => {
    //   state.peopleStatus = 'loading';
    // });
    // builder.addCase(getAllCountriesThunk.fulfilled, (state, action) => {
    //   state.peopleStatus = 'idle';
    // });
    // builder.addCase(getAllCountriesThunk.rejected, (state) => {
    //   state.peopleStatus = 'failed';
    // });
  },
});

export const { PeopleState, setPeopleDataState } = peopleSlice.actions;

export default peopleSlice.reducer;
