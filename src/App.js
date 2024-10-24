import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import Home from "./pages/Website/Home";

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <NormalizeSlash>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />

        {/* Landing Pages */}
        <Route
          path="/web-development"
          element={<LandingPage page={"web-development"} />}
        />
        <Route
          path="/app-development"
          element={<LandingPage page={"app-development"} />}
        />
      </Routes>
    </NormalizeSlash>
  );
}

export default App;
