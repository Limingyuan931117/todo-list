import { GetAllVersions, GetAllSuccess, GetAllFailure, Item } from "../types";

/**
 * 获取已创建的所有版本号
 */
function getAllVersions(): GetAllVersions {
  return {
    type: "GET_ALL"
  };
}

/**
 * 成功
 */
function getAllSuccess(items: Item[]): GetAllSuccess {
  return {
    type: "GET_ALL_SUCCESS",
    payload: items
  };
}

/**
 * 失败
 */
function getAllFailure(): GetAllFailure {
  return {
    type: "GET_ALL_FAILURE"
  };
}

export { getAllVersions, getAllFailure, getAllSuccess };
