import { Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Outlet />
    </div>
  );
}

export default App;
