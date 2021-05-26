import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

const middlewares = [];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;