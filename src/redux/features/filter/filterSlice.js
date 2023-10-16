import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
  selectedTags: [],
  searchText: "",
};

//Create slice
const filterSlice = createSlice({
  name: "tagFilter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.selectedTags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexTag = state.selectedTags.indexOf(action.payload);
      if (indexTag !== -1) {
        state.selectedTags.splice(indexTag, 1);
      }
    },
    searched: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

// export const {} = videoSlice.actions;

export default filterSlice.reducer; //i am not manually dispatch so export reducer
export const { tagSelected, tagRemoved, searched } = filterSlice.reducer;
