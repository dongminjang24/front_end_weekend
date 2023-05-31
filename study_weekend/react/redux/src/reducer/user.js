const initailState = [
  {
    id: 1,
    name: "김성용",
  },
];
const user = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return [...state].filter((v) => v.id !== action.payload.id);
    default:
      return state;
  }
};

export default user;
