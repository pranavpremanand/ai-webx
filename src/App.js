import { Route, Routes } from "react-router-dom";
import WebDevelopmentLandingPage from "./pages/WebDevelopmentLandingPage/WebDevelopmentLandingPage";

function App() {
  return (
    <Routes>
      {["/web-development", "/app-development"].map((path) => (
        <Route key={path} path={path} element={<WebDevelopmentLandingPage />} />
      ))}
    </Routes>
  );
}

export default App;
