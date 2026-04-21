import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function AppRoutes() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/agent/") ||
    location.pathname.startsWith("/projects/");

  return (
    <>
      {!hideNavbar ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent/john-carter" element={<AgentProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
