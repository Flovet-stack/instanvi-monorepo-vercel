import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Project } from '@instanvi/client';

interface Project {
  uuid: string;
  created_at: string;
  name: string;
  logo: string;
}

export interface ProjectState {
  project: Project | null;
}

const initialState: ProjectState = {
  project: {
    uuid: '8dd836ae-d828-477f-b30e-d49ef97a17fc',
    created_at: '2023-12-19T01:18:21.158Z',
    name: 'Ullrich, Reinger and Roberts',
    logo: 'logo.png',
  },
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //set project state
    ProjectState: (
      state: ProjectState,
      action: PayloadAction<ProjectState>
    ) => {
      state.project = action.payload.project;
    },

    //set user state
    setUserState: (state: ProjectState, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllCountriesThunk.pending, (state) => {
    //   state.projectStatus = 'loading';
    // });
    // builder.addCase(getAllCountriesThunk.fulfilled, (state, action) => {
    //   state.projectStatus = 'idle';
    // });
    // builder.addCase(getAllCountriesThunk.rejected, (state) => {
    //   state.projectStatus = 'failed';
    // });
  },
});

export const { ProjectState, setUserState } = projectSlice.actions;

export default projectSlice.reducer;
