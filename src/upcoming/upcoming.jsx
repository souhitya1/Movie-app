import React, { useEffect, useState } from "react";

export default function Upcoming() {
  function goBack() {
    window.location.href = "/";
  }

  let [upcoming, setupcoming] = useState([]);

  async function fetchUpcoming() {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=29890ea92423856f72f1a42422ad65b6&language=en-US&page=1"
    );
    let res = await data.json();
    setupcoming(res.results);
  }

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px"}}>
      <button onClick={goBack}style={{backgroundColor: "red"}}>Back to home</button>

      <h2 style={{ color: "white", textAlign: "center" }}>Upcoming Movies</h2>

      <div className="movie-list">
        {upcoming.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h4>{movie.original_title}</h4>
            <p>{movie.overview || "No description available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
