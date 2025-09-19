import { useLocation } from "react-router";
import Navbar from "./navbar";
import "./seemore.css"; // <-- add css file

export default function Seemore() {
  const location = useLocation();
  const movie = location.state?.movie;

  return (
    <div className="seemore">
      <Navbar />

      <div className="seemore-container">
        {/* Poster */}
        <div className="poster">
          <img
            src={movie?.Poster || "https://via.placeholder.com/350x500?text=No+Image"}
            alt={movie?.Title}
          />
        </div>

        {/* Movie Info */}
        <div className="info">
          <h1>{movie?.Title}</h1>

          <div className="runtime-genre">
            <p><span>Runtime:</span> {movie?.Runtime || "N/A"}</p>
            <p><span>Genre:</span> {movie?.Genre || "N/A"}</p>
          </div>

          <p><span>Director:</span> {movie?.Director || "N/A"}</p>
          <p><span>Rated:</span> {movie?.Rated || "N/A"}</p>
          <p><span>Cast:</span> {movie?.Cast || "N/A"}</p>

          <p className="rating">⭐ IMDb Rating: {movie?.IMDB || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
