import { HashRouter as Router, Routes, Route } from "react-router-dom"; // 👈 Mudou para HashRouter
import WelcomePage from "./pages/Welcome/WelcomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AcademicPage from "./pages/Academic/AcademicPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    // No HashRouter você NÃO precisa mais do basename="/portfolio-nicole"
    <Router> 
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;