import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import Home from "./pages/Website/Home";
import AboutUs from "./pages/Website/AboutUs";
import OurServices from "./pages/Website/OurServices";
import ScrollToTop from "./components/ScrollToTop";
import ServicePageLayout from "./components/Website/ServicePageLayout";
import AppDevelopment from "./pages/Website/AppDevelopment";
import WebDevelopment from "./pages/Website/WebDevelopment";
import AIAndMLDevelopment from "./pages/Website/AIAndMLDevelopment";
import BlockchainDevelopment from "./pages/Website/BlockchainDevelopment";

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <NormalizeSlash>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />

        {/* Services Detail Routes with Layout */}
        <Route path="/services" element={<ServicePageLayout />}>
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="ai-ml-development" element={<AIAndMLDevelopment />} />
          <Route path="blockchain-solutions" element={<BlockchainDevelopment />} />
        </Route>

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
