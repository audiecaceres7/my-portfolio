import "./styles/App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import PortfolioPage from "./PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/PortfolioPage" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
