import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Button } from "react-onsenui";

import "./styles.css";

import Main from "./common/layout/main";
import reducers from "./common/reducers";

const store = createStore(reducers);

function App() {
  return (
    <div className="App">
      <Link to="/s01">S01</Link>
      <br />

      <Link to="/s02">S02</Link>
      <Button>Botao</Button>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
