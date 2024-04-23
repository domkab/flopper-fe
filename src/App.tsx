import './App.scss'
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomeFashionSix = lazy(() => import("./pages/HomeFashionSix"));

const App: React.FC = () => {
  return (
    <>
    </>
  )
}

export default App
