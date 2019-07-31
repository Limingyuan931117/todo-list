import { createContainer } from "unstated-next";
import useReducer from "./reducers/useReducer";

function useCustomHook() {
  let [list, listDispatch] = useReducer();

  return { list, listDispatch };
}

export default createContainer(useCustomHook);
