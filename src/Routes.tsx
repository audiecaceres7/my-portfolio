import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./MainPage";
import PortfolioPage from "./PortfolioPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
