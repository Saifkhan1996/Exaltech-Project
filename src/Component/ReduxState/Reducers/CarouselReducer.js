export const carouselReducer = (
  state = [
    {
      carouselImage: "logo192.png",
      carouselTitle: "FirstSlide",
      carouselDesc: "asdf",
    },
    {
      carouselImage: "logo192.png",
      carouselTitle: "SecondtSlide",
      carouselDesc: "asdf",
    },
    {
      carouselImage: "logo192.png",
      carouselTitle: "ThirdtSlide",
      carouselDesc: "asdf",
    },
  ],
  action
) => {
  if (action.type === "ADD_CAROUSEL") {
    return [...state, action.data];
  } else return state;
};
