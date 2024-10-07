import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        filters: {
          name: String(action.payload),
        },
      };
    },
  },
});

export const selectNameFilter = (state) => state.filters.filters.name;

export const { changeFilter } = slice.actions;
export default slice.reducer;

// import { createAction } from "@reduxjs/toolkit";
// const initialState = {
//   filters: {
//     name: "",
//   },
// };

// export const changeFilter = createAction("filters/changeFilter");

// export const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filters/changeFilter":
//       return {
//         ...state,
//         filters: {
//           name: String(action.payload),
//         },
//       };

//     default:
//       return state;
//   }
// };
