import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMusic: null,
    loading: false,
    error: false,
};

export const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
      MusicStart:(state)=>{
        state.loading=true;
      },
      MusicSuccess:(state,action)=>{
        state.loading=false;
        state.currentMusic = action.payload;
      },
      MusicFailure:(state)=>{
        state.loading=false;
        state.error=true;
      },

    },
  });
  
  export const {MusicStart,MusicSuccess,MusicFailure}= musicSlice.actions;

  export default musicSlice.reducer;