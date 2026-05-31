import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router> 
      <Routes>
        {/* Telas Públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Painel do Portfólio (Onde a mágica acontece) */}
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;