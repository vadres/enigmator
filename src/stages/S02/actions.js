import { S2_UPDATE_CANTO, S2_COMPLETED } from "../../common/consts";

export const updateCanto = (list, index) => {
  return dispatch => {
    const copyList = [...list];
    copyList[index]["css"] =
      list[index]["css"] == "clickable" ? "clickable active" : "clickable";

    dispatch({
      type: S2_UPDATE_CANTO,
      payload: copyList
    });
  };
};

export const gameover = (list, canto) => {
  let zero = 0;
  let one = 0;

  list.forEach(item => {
    if (item.css === "clickable active" && item.value === 1) one++;

    if (canto.indexOf(item) != -1) {
      if (item.css === "clickable" && item.value === 0) zero++;
    } else {
      if (item.css === "clickable active" && item.value === 0) zero++;
    }
  });

  return {
    type: S2_COMPLETED,
    payload: zero === 0 && one === 0
  };
};
