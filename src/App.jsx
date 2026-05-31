import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AcademicPage from "./pages/Academic/AcademicPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router basename="/portfolio-nicole"> {/* 👈 Ajustado aqui */}
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


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router basename="/portfolio-nicole">
//       <Routes>
//         <Route path="/" element={<div style={{ padding: '20px', color: 'black' }}><h1>O React funcionou!</h1></div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;