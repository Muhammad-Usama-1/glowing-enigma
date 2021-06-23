import { contacts } from "./Data";
export const initialState = {
  contacts: contacts,
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "REFRESH":
      return {
        ...state,
        contacts: initialState.contacts,
      };
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

    case "UPDATE_CONTACT":
      return {
        ...state,
      };
    case "DELETE_ALL":
      return {
        ...state,
        contacts: [],
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
