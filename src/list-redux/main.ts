import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import reducer from "./reducers/staticList";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
