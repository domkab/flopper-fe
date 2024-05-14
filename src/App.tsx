import './App.scss'
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

console.log('Environment VITE_PUBLIC_URL:', import.meta.env.VITE_PUBLIC_URL);

const HomeFashionSix = lazy(() => import("./pages/HomeFashionSix"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandart"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);

const Product = lazy(() => import("./pages/shop-product/Product"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));

const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const NotFound = lazy(() => import("./pages/other/NotFound"));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          {/* Routes and other components will be rendered here */}
          <Routes>
            <Route
              path={import.meta.env.VITE_PUBLIC_URL}
              element={<HomeFashionSix />}
            />
            {/* shopping grid */}
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            {/* product pages */}
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />

            {/* other pages */}
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/cart"}
              element={<Cart />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/contact"}
              element={<Contact />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App
