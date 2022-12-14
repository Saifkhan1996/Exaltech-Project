export const CourseReducer = (
  state = [
    {
      courseImage:
        "https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg",
      courseTitle: "HTML",
      courseDesc: "Hyper Text Markup Language",
    },
  ],
  action
) => {
  if (action.type === "ADD_COURSE") {
    return [...state, action.data];
  } else return state;
};
