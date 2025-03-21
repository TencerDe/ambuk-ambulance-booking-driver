import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get stored credentials
    const storedUsername = localStorage.getItem("driverUsername");
    const storedPassword = localStorage.getItem("driverPassword");

    // Check if entered details match
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("driverAuth", "true"); // Store login status
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>🚖 Driver Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;
