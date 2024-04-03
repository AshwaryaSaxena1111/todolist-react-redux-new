import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import Counter  from "./features/counter/Counter";

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
   <Counter/>
   </div>
  </Provider>,
  document.getElementById("root")
);
