import { Route, Routes } from "react-router-dom";
import WebDevelopmentLandingPage from "./pages/WebDevelopmentLandingPage/WebDevelopmentLandingPage";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <Routes>
      <Route path="/web-development" element={<WebDevelopmentLandingPage />} />
      <Route path="/app-development" element={<WebDevelopmentLandingPage />} />
      {/* {["/web-development", "/app-development"].map((path) => (
        <Route key={path} path={path} element={<WebDevelopmentLandingPage />} />
      ))} */}
    </Routes>
  );
}

export default App;
