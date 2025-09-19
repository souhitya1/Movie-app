import "./mainh.css";
import { Link } from "react-router-dom";

export default function Mainh() {
  return (
    <div className="mainh">
      <h1 className="mainh-title">Discover Movies, News & More 🎬</h1>
      <p className="mainh-subtitle">Your ultimate Bollywood & Hollywood companion</p>
      <Link to= "/search"><button className="mainh-button">Explore Now</button></Link>
    </div>
  );
}
