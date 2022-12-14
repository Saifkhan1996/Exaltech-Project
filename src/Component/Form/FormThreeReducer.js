const FormThreeReducer = (state = [], action) => {
  if (action.type === "FORM_THREE_DATA") {
    return [...state, action.payload];
  }
  return state;
};

export default FormThreeReducer;
