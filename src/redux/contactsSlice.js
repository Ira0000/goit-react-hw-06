import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
    },
  },
  reducers: {
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    },
    addContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    },
  },
});
export const selectContacts = (state) => state.contacts.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

// import { createAction } from "@reduxjs/toolkit";
// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// const initialState = {
//   contacts: {
//     items: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//   },
// };

// export const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (item) => item.id !== action.payload
//           ),
//         },
//       };

//     case "contacts/addContact":
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };

//     default:
//       return state;
//   }
// };
