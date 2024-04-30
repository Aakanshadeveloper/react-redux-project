export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';

// function for add 
export const addField = () => ({
  type: ADD_FIELD,
});

// function for remove
export const removeField = (index) => ({
  type: REMOVE_FIELD,
  payload: index,
});

// function for update
export const updateField = (index,value,type) => ({
  type: UPDATE_FIELD,
  payload: { index,value,type },
});