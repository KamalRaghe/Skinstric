"use client";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      margin: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "black",
      color: "white"
    }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        fontSize: "12px"
      }}>
        <div>
          <span style={{ fontWeight: "bold", fontSize: "11px" }}>
            SKINSTRIC
          </span>
          <span style={{ color: "grey", marginLeft: "6px" }}>
            [ INTRO ]
          </span>
        </div>

        <button style={{
          backgroundColor: "white",
          color: "black",
          padding: "8px 14px",
          fontSize: "11px",
          border: "none",
          cursor: "pointer"
        }}>
          ENTER CODE
        </button>
      </div>

      {/* CAMERA AREA */}
      <div style={{
        flex: 1,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

        {/* FACE GUIDE BOX */}
        <div style={{
          width: "260px",
          height: "320px",
          border: "1px dashed rgba(255,255,255,0.4)",
          borderRadius: "10px"
        }} />

        {/* INSTRUCTION TEXT */}
        <div style={{
          position: "absolute",
          top: "20%",
          textAlign: "center",
          fontSize: "11px",
          opacity: 0.8
        }}>
          <div>FOR BEST RESULTS MAKE SURE TO HAVE</div>
          <div style={{ marginTop: "8px", display: "flex", gap: "12px", justifyContent: "center" }}>
            <span>• Neutral Expression</span>
            <span>• Frontal Pose</span>
            <span>• Good Lighting</span>
          </div>
        </div>

        {/* CAPTURE BUTTON */}
        <div style={{
          position: "absolute",
          bottom: "60px",
          right: "40px"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}>
            📷
          </div>
        </div>

        {/* CTA TEXT */}
        <div style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "12px",
          opacity: 0.8
        }}>
          TAP TO START ANALYSIS
        </div>
      </div>
    </div>
  );
}