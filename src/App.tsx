import './App.scss'
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

console.log('Environment VITE_PUBLIC_URL:', import.meta.env.VITE_PUBLIC_URL);

const HomeFashionSix = lazy(() => import("./pages/HomeFashionSix"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandart"));

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
            <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App
