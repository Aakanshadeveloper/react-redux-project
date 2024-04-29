import { ADD_FIELD, REMOVE_FIELD, UPDATE_FIELD } from './Actions';

const initialState = {
  fields: [{text:''}],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        fields: [...state.fields, ''],
      };
    case REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((_, index) => index !== action.payload),
      };
    case UPDATE_FIELD:
      return {
        ...state,
        fields: state.fields.map((field, index) =>
          index === action.payload.index ? action.payload.value : field
        ),
      };
    default:
      return state;
  }
};

export default reducer;