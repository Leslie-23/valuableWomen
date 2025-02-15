import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MembershipForm from "./components/MembershipForm";
import VerifyEmail from "./components/VerifyEmail";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MembershipForm />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
