import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      // Store driver credentials in localStorage
      localStorage.setItem("driverUsername", username);
      localStorage.setItem("driverPassword", password);
      alert("Signup Successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } else {
      alert("Please enter a username and password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>🆕 Driver Signup</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
