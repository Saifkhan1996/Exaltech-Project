export const NavigationReducer = (
  state = [{ name: "Google", link: "https://google.com", target: "_blank" }],
  action
) => {
  if (action.type === "ADD_LINK") {
    return [...state, action.data];
  } else return state;
};
