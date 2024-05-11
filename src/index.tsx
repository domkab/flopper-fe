import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import "animate.css";
import "swiper/swiper-bundle.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";
import products from "./data/products.json";
import { setProducts } from "./store/slices/product-slice";

// Set the initial products data in the store
store.dispatch(setProducts(products));

// Find the root element in the HTML
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element");
}

// Create a root with React 18's new API
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
