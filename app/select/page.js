"use client";
import { useState } from "react";

export default function Select() {
  const [hoverTop, setHoverTop] = useState(false);

  return (
    <div
      style={{
        height: "97vh",
        overflowY: "hidden",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          fontSize: "10px",
          background: "white",
        }}
      >
        <div>
          <span style={{ fontWeight: "bold" }}>SKINSTRIC</span>
          <span style={{ color: "grey", marginLeft: "10px" }}>
            [ INTRO ]
          </span>
        </div>

        <button
          style={{
            background: "black",
            color: "white",
            padding: "10px",
            fontSize: "9px",
            fontWeight: "bold",
            border: "none",
          }}
        >
          ENTER CODE
        </button>
      </div>

      {/* TEXT */}
      <div
        style={{
          fontWeight: "bold",
          width: "150px",
          margin: "0 20px",
          paddingRight: "30px",
        }}
      >
        A.I. ANALYSIS
      </div>

      <div style={{ width: "450px", margin: "5px 20px" }}>
        A.I. has estimated the following.
      </div>

      <div style={{ width: "450px", margin: "5px 20px" }}>
        Fix estimated information if needed.
      </div>

      {/* DIAMOND WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          transform: "rotate(45deg)",
          position: "relative",
          bottom: "50px",
        }}
      >
        {/* BIG DIAMOND */}
        <div
          style={{
            width: "330px",
            height: "330px",
            border: "1px dashed grey",
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "20px",
            opacity: hoverTop ? 1 : 0,
            transform: hoverTop ? "scale(1.05)" : "scale(1)",
            transition: "all 0.4s ease",
          }}
        >
          {/* TOP DIAMOND */}
          <div
            onMouseEnter={() => setHoverTop(true)}
            onMouseLeave={() => setHoverTop(false)}
            style={{
              border: "1px solid black",
            }}
          ></div>

          <div style={{ border: "1px solid black" }}></div>
          <div style={{ border: "1px solid black" }}></div>
          <div style={{ border: "1px solid black" }}></div>
        </div>
      </div>
    </div>
  );
}