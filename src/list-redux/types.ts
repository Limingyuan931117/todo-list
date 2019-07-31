export interface Item {
  title: string;
  id: string;
  num: string;
}

export interface GetAllVersions {
  type: "GET_ALL";
}

export interface GetAllSuccess {
  type: "GET_ALL_SUCCESS";
  payload: Item[];
}

export interface GetAllFailure {
  type: "GET_ALL_FAILURE";
}
