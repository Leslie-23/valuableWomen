import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MembershipForm from "./components/MembershipForm";
import VerifyEmail from "./components/VerifyEmail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MembershipForm />} />
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
