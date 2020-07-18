import React from "react";
import { Calc } from "./components/Calc";
import { Provider } from "react-redux";
import { calcReducer } from "./store/reducers";
import { createStore } from "redux";

export default function App() {
  const store = createStore(calcReducer);

  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  );
}
