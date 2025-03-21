import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
