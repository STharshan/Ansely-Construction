import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AgentProfilePage from "./pages/AgentProfilePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";



  function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/agents/:slug" element={<AgentProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
