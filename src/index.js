import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import './i18n';
import Loader from "./themes/loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader/>}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

