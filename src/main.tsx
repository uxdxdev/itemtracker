import ReactDOM from "react-dom/client";
import {
  // BrowserRouter,
  HashRouter,
} from "react-router-dom";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
