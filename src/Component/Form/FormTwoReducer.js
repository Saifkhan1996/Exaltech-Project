const FormTwoReducer = (state = [], action) => {
  if (action.type === "FORM_TWO_DATA") {
    return [...state, action.payload];
  }
  return state;
};

export default FormTwoReducer;
