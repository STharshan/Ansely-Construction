import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import RolixyAgentsPage from "./pages/RolixyAgentsPage";
import Footer from "./components/Footer";

function AppLayout() {
  const { pathname } = useLocation();
  const solidNavbarRoutes = ["/rolixy-agents", "/agents/", "/projects/"];
  const navbarVariant = solidNavbarRoutes.some((route) => pathname.startsWith(route))
    ? "solid"
    : "transparent";

  return (
    <>
      <Navbar variant={navbarVariant} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents/:slug" element={<AgentProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/rolixy-agents" element={<RolixyAgentsPage />} />
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
