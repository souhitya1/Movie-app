import React, { useState, useEffect } from "react";

export default function Newstab() {
  const [news, setNews] = useState([]);

  async function fetchnews() {
    try {
      let res = await fetch(
        "https://newsapi.org/v2/everything?q=bollywood&language=en&sortBy=publishedAt&pageSize=10&apiKey=eb9f22b6f9234036bfa7e254935d992e"
      );
      let data = await res.json();
      setNews(data.articles || []);
    } catch (error) {
      console.log("error fetching news", error);
      setNews([]);
    }
  }

  useEffect(() => {
    fetchnews();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#2E0C58",
        minHeight: "100vh",
        padding: "20px",
        width: "100%",
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>Bollywood News</h2>
      
      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              background: "#3E1A6B",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "1.1rem" }}>{item.title}</h3>
            <p style={{ fontSize: "0.9rem" }}>{item.description}</p>
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            )}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "10px",
                color: "#FFCE00",
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
