export const FooterReducer = (
  state = [
    {
      footerImage:
        "https://www.unirete.org/user_images/Logo_Exaltech_1586873700.png",
      footerTitle: "My Footer",
      footerDesc: "This is Footer",
    },
  ],
  action
) => {
  if (action.type === "ADD_FOOTER") {
    return [...state, action.data];
  } else return state;
};
