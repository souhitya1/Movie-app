import { Link } from "react-router";
import "./navbar.css"; // We'll move styles to CSS for responsiveness

export default function Navbar() {
  return (
    <div className="navbar" style={{ backgroundColor: "#2E0C58", padding: "10px 20px" }}>
      <h2 className="logo">
        <Link to="/">Moviefolio</Link>
      </h2>
      <div className="nav-links">
        <Link to="/news">News</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
    </div>
  );
}
