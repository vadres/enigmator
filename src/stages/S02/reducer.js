import { S2_UPDATE_CANTO, S2_COMPLETED } from "../../common/consts";

const createdList = (() => {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      value: i < 6 ? 0 : 1,
      css: "clickable"
    });
  }
  let sortList = list
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);

  let randomNum = Math.round(Math.random() * 10);
  randomNum = randomNum > 5 ? randomNum - 5 : randomNum;
  return {
    list: sortList,
    canto: sortList.slice(randomNum, randomNum + 5)
  };
})();

const initial_state = {
  completed: false,
  list: createdList.list,
  canto: createdList.canto
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case S2_UPDATE_CANTO:
      return { ...state, list: action.payload };
    case S2_COMPLETED:
      return { ...state, completed: action.payload };
    default:
      return state;
  }
};
