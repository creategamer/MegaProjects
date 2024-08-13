import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentBlog: null,
    loading: false,
    error: false,
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
      BlogStart:(state)=>{
        state.loading=true;
      },
      BlogSuccess:(state,action)=>{
        state.loading=false;
        state.currentBlog=action.payload;
      },
      BlogFailure:(state)=>{
        state.loading=false;
        state.error=true;
      },

    },
  });
  
  export const {BlogStart,BlogSuccess,BlogFailure}= blogSlice.actions;

  export default blogSlice.reducer;