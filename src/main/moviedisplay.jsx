import React, { useState } from "react";
import Navbar from "../home/navbar";
import Movie from "./movie";
import Movietab from "./movietab";
import Teaser from "./teaser";

export default function Moviedisplay() {
  const [seemovie, setseemovie] = useState({
    Title: "Inception",
    Year: "2010",
    Description: "A science fiction movie",
    Rated: "R",
    Genre: "Science-fiction",
    Director: "Christopher nolan",
    Writer: "Christopher nolan",
    Cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    Awards: "Won 4 Oscars. 159 wins & 220 nominations total",
    IMDB: "8.8",
    Production: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNl5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Runtime: "148 min",
  });

  function update(newinfo) {
    setseemovie(newinfo);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#2E0C58",
      }}
    >
      <div style={{ width: "100%", marginBottom: "30px" }}>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flex: 1,
          width: "100%",
          flexWrap: "wrap", // ✅ allows stacking on small screens
          gap: "20px",
        }}
      >
        <Movie update={update} />
        <Movietab movie={seemovie} />
      </div>
    </div>
  );
}
