import { S2_UPDATE_CANTO } from "../../common/consts";

export const updateCanto = (list, index) => {
  const copyList = [...list];
  copyList[index]["css"] =
    list[index]["css"] == "clickable" ? "clickable active" : "clickable";

  return {
    type: S2_UPDATE_CANTO,
    payload: copyList
  };
};
