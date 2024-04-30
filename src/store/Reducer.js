import { ADD_FIELD, REMOVE_FIELD, UPDATE_FIELD } from "./Actions";

const initialState = {
  fields: [{ startDate: "", endDate: "" }],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // check for add field
    case ADD_FIELD:
      return {
        ...state,
        fields: [...state?.fields, { startDate: "", endDate: "" }],
      };

    // Check For remove field

    case REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((_, index) => index !== action.payload),
      };

    // Check For update field
    case UPDATE_FIELD:
      return {
        ...state,
        fields: state.fields.map((field, index) =>
          index === action.payload.index
            ? action.payload.type === "startDate"
              ? { ...field, startDate: action.payload.value }
              : action.payload.type === "endDate"
              ? { ...field, endDate: action.payload.value }
              : field
            : field
        ),
      };
    default:
      return state;
  }
};

export default reducer;
