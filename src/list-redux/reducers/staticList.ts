import { produce } from "immer";

/**
 * 获取已发布的版本信息
 */
const staticListReducer = produce((draft, action) => {
  switch (action.type) {
    case "GET_ALL":
      return draft;
    default:
      return draft;
  }
});

export default staticListReducer;
