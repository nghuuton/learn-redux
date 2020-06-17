import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    removeProject: (projects, action) => {
      projects.filter((pro) => pro.id !== action.payload.id);
    },
  },
});

export const { addProject, removeProject } = slice.actions;
export default slice.reducer;
