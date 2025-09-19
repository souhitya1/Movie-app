import Moviedisplay from "./moviedisplay";
import Teaser from "./teaser";
import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Movie({ update }) {
  const [movie, setmovie] = useState("");

  async function search() {
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=58640447`;
    let res = await fetch(url);
    let data = await res.json();

    if (data.Response === "False") {
      console.log("No data found");
      return null;
    }

    let result = {
      Title: data.Title,
      Year: data.Year,
      Description: data.Plot,
      Rated: data.Rated,
      Genre: data.Genre,
      Director: data.Director,
      Writer: data.Writer,
      Cast: data.Actors,
      Awards: data.Awards,
      IMDB: data.imdbRating,
      Production: data.Production,
      Poster: data.Poster,
      Runtime: data.Runtime
    };

    console.log(result);
    return result;
  }

  function handleuser(event) {
    setmovie(event.target.value);
  }

  async function handlesubmit(event) {
    event.preventDefault();
    let info = await search();
    update(info);
  }

  return (
    <div style={{ width: "100%", position: "fixed", top: "80px", left: 0, padding: "20px", backgroundColor: "#2E0C58", zIndex: 1000 }}>
      {/* Search bar section */}
      <form
        onSubmit={handlesubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter movie name"
          variant="outlined"
          value={movie}
          onChange={handleuser}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1.5px solid black",
            width: "300px",
          }}
        />
        <Button variant="contained" type="submit" size="large"
        style={{
          height: "56px",
        }}
        >
          Search
        </Button>
      </form>

      {/* Movie card will appear centered (assuming Moviedisplay handles its own styling) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          padding: "0 20px"
        }}
      >
        {/* Once you fetch, Moviedisplay can render the card */}
        {/* Example: <Moviedisplay movie={movieData} /> */}
      </div>
    </div>
  );
}
