import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
///import { fetchCountries } from "./Feature/countrySlice.ts";
import store from "./App/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
