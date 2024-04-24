import './App.scss'
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomeFashionSix = lazy(() => import("./pages/HomeFashionSix"));

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

          <Route
            path={import.meta.env.BASE_URL + "/home-fashion-six"}
            element={<HomeFashionSix />}
          />
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App
