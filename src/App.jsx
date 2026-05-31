import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AcademicPage from "./pages/Academic/AcademicPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
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
