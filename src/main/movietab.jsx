import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movietab = ({ movie }) => {
  const navigate = useNavigate();

  function handleSeeMore() {
    navigate("/seemore", { state: { movie } }); // ✅ pass movie as state
  }

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <img
            src={movie?.Poster || "https://via.placeholder.com/300x450?text=No+Image"}
            alt={`${movie?.Title} Poster`}
          />
        </div>
        <div className="category">{movie?.Title || "Unknown Title"}</div>
        <div className="heading">{movie?.Year || "N/A"}</div>
        <button style={{ marginTop: "20px" }} onClick={handleSeeMore}>
          See more
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    background: white;
    padding: 0.4em;
    border-radius: 6px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .card-image {
    width: 100%;
    height: 350px;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  .category {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 10px 7px 0;
    text-align: center;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%;
    }

    .card-image {
      height: 250px;
    }
  }
`;

// ✅ Default export
export default Movietab;
