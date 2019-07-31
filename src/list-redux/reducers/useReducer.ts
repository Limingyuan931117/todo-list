import { useReducer } from "react";
import staticList from "./staticList";

function useReducerHooks() {
  const [list, listDispatch] = useReducer(staticList, []);

  return [list, listDispatch];
}

export default useReducerHooks;
