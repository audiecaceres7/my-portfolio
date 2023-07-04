import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./MainPage";
import PortfolioPage from "./PortfolioPage";
import { AnimatePresence } from "framer-motion";
import SaasWebsite from "./SaasWebsite";
import FolioWebsite from "./FolioWebsite";
import PokeApiWebsite from "./PokeApiWebsite";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/SaasWebsite" element={<SaasWebsite />} />
        <Route path="/FolioWebsite" element={<FolioWebsite />} />
        <Route path="/PokeApiWebsite" element={<PokeApiWebsite />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
