import "./styles/App.css";
import NavBar from "./NavBar";
import { HashRouter } from "react-router-dom";
import AnimatedRoutes from "./Routes";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
