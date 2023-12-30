import { RootState } from './../../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPeople } from 'apps/advertiser-dsp/app/api/people.api';

export const getAllPeopleThunk = createAsyncThunk(
  'getAllPeople',
  async (_, { getState, dispatch }) => {
    console.log('🚀 ~ file: thunk.ts:9 ~ getState:');
    // const state = getState();
    // const { project } = state as RootState;
    try {
      // const res = await getAllPeople(project.project?.uuid as string);
      // console.log('🚀 ~ file: thunk.ts:12 ~ res:', res);
      // dispatch(setCountryListState(res.data.data));
      // return res;
    } catch (error) {
      // dispatch(errorThunk(error));
      return Promise.reject(error);
    }
  }
);
