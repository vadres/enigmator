import { S2_UPDATE_CANTO } from "../../common/consts";

const initial_state = {
  list: (() => {
    let list = [];
    for (let i = 0; i < 10; i++) {
      list.push({
        value: Math.round(Math.random()),
        css: "clickable"
      });
    }
    return list;
  })()
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case S2_UPDATE_CANTO:
      console.log(action);
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
