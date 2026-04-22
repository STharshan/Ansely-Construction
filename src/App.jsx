import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AgentsPage from "./pages/AgentsPage";
import Footer from "./components/Footer";

function AppLayout() {
  const { hash, pathname } = useLocation();
  const solidNavbarRoutes = ["/agents", "/projects/"];
  const navbarVariant = solidNavbarRoutes.some((route) => pathname.startsWith(route))
    ? "solid"
    : "transparent";

  useEffect(() => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [hash, pathname]);

  return (
    <>
      <Navbar variant={navbarVariant} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:slug" element={<AgentProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}


export default App;
