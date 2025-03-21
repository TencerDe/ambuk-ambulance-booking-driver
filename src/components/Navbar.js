import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("driverAuth");

  const handleLogout = () => {
    localStorage.removeItem("driverAuth"); // Remove login status
    alert("Logged out successfully.");
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">🚪 Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
