const FormOneReducer = (state = [], action) => {
  if (action.type === "FORM_ONE_DATA") {
    return [...state, action.payload];
  }
  return state;
};

export default FormOneReducer;
