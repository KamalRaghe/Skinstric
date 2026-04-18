"use client";
import { useEffect, useRef } from "react";

export default function Page() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        const video = videoRef.current;
        video.srcObject = stream;

        video.onloadedmetadata = () => {
          video.play();
        };
      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    startCamera();
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"start",
        padding: "20px",
        fontSize: "10px",
        background: "white"
      }}>
        <div>
          <span style={{ fontWeight: "bold" }}>SKINSTRIC</span>
          <span style={{ color: "grey", marginLeft: "6px" }}>[ INTRO ]</span>
        </div>

        <button style={{
          background: "black",
          color: "white",
          padding: "10px",
          fontSize: "9px",
          fontWeight:"bold",
          border: "none"
        }}>
          ENTER CODE
        </button>
        
      </div>

      {/* CAMERA SECTION */}
      <div style={{
        flex: 1,
        position: "relative",
        overflow: "hidden"
      }}>

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.2)"
        }} />

        {/* CENTER UI */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        }}>

          {/* TEXT */}
          <div style={{
            fontSize: "14px",
            marginBottom: "12px",
            textAlign: "center"
          }}>
            FOR BEST RESULTS MAKE SURE TO HAVE
            <div style={{ 
                marginTop: "6px", 
                opacity: 0.9,
                fontSize:"12px" 
            }}>
              ◇ NEUTRAL EXPRESSION &nbsp;
              ◇ FRONTAL POSE &nbsp;
              ◇ GOOD LIGHTING
            </div>
          </div>

          {/* FACE GUIDE */}
       
        </div>

        {/* CAPTURE BUTTON */}
        <div style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "2px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
            cursor: "pointer"
          }}>
            📷
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "white",
          fontSize: "12px"
        }}>
          ← BACK
        </div>

      </div>
    </div>
  );
}