import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  // Check if the driver is logged in
  useEffect(() => {
    if (!localStorage.getItem("driverAuth")) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRequest = {
        id: Math.random().toString(36).substr(2, 9),
        pickup: `Location ${Math.floor(Math.random() * 10)}`,
        dropoff: `Location ${Math.floor(Math.random() * 10)}`,
      };
      setRequests((prev) => [...prev, newRequest]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const acceptRide = (id) => {
    alert(`Ride Accepted: ${id}`);
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const rejectRide = (id) => {
    alert(`Ride Rejected: ${id}`);
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h2>🚖 Driver Dashboard</h2>
      {requests.length === 0 ? <p>No ride requests yet...</p> : null}
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            <span>📍 {req.pickup} → 🎯 {req.dropoff}</span>
            <div>
              <button onClick={() => acceptRide(req.id)}>✅ Accept</button>
              <button onClick={() => rejectRide(req.id)}>❌ Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
