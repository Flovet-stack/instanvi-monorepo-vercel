import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer, peopleReducer, projectReducer } from './slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    people: peopleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
