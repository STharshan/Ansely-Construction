import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import RolixyAgentsPage from "./pages/RolixyAgentsPage";
import Footer from "./components/Footer";

  function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/agents/:slug" element={<AgentProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
           <Route path="/rolixy-agents" element={<RolixyAgentsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
