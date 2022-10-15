import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Context from "./context/Context";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <HashRouter>
    {/* <Provider store={store}> */}
    <Context>
      <App />
      {/* </Provider> */}
    </Context>
  </HashRouter>
);
