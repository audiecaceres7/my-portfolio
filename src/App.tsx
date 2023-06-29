import "./styles/App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
