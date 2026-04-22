import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AgentsPage from "./pages/AgentsPage";
import Footer from "./components/Footer";
import About from "./pages/About";

function AppLayout() {
  const { pathname } = useLocation();
  const solidNavbarRoutes = ["/agents", "/projects/"];
  const navbarVariant = solidNavbarRoutes.some((route) => pathname.startsWith(route))
    ? "solid"
    : "transparent";

  return (
    <>
      <Navbar variant={navbarVariant} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
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