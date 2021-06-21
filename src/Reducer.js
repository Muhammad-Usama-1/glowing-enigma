import { contacts } from "./Data";
export const initialState = {
  contacts: contacts,
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: action.payload,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
