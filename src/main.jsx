import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Redux/strore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
);
