import { ADD, DELETE, ERROR, ADD_DETAİL, ID, LOVE } from "../Types";
import { test1 } from "../img/root_img";

export const detail = {
  image_url: test1,
  title: "Pasta with tomato cream sauce",
  cooking_time: 45,
  servings: 4,
  ingredients: [
    { quantity: 1000, unit: "g", description: "pasta" },
    { quantity: 1 / 2, unit: "cup", description: "ricotta cheese" },
    { quantity: 1, unit: "", description: "can of tomatoes, whole or crushed" },
    { quantity: 1, unit: "", description: "can tuna packed in olive oil" },
    { quantity: 1 / 2, unit: "cup", description: "grated parmesan cheese" },
    {quantity: 1 / 4,unit: "cup",description: "fresh basil, chopped or torn",},
  ],
};



const initialState={ datam: "", error: "", datamDetail: detail, id: "", love: "" }
export default function Reducer(state =initialState ,action) {
  switch (action.type) {
    case ADD:
      return { ...state, datam: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case ADD_DETAİL:
      return { ...state, datamDetail: action.payload };
    case ID:
      return { ...state, id: action.payload };
    case DELETE:
      return {...state,love: state.love.filter(
          (todo) => todo.image_url !== action.payload.image_url),};
    case LOVE:
      return { ...state, love: [...state.love, action.payload] };
    default:
      return state;
  }
}

