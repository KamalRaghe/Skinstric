"use client";
import { useEffect, useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";
export default function Page() {
  const [photo, setPhoto] = useState(null);
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    const takePicture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");

        ctx.drawImage(video, 0, 0, width, height);

        const image = canvas.toDataURL("image/png");
        setPhoto(image);
    };

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
            marginBottom: "16px",
            textAlign: "center",
            position:"relative",
            top:"100px",
          }}>
            FOR BEST RESULTS MAKE SURE TO HAVE
            <br></br>
            <div className="center" style={{ 
                marginTop: "6px",
                justifyContent:"space-between",
                width:"450px", 
                opacity: 0.9,
                fontSize:"12px",
                margin:"20px",
            }}>
              <div>◇ NEUTRAL EXPRESSION</div> 
              <div>◇ FRONTAL POSE</div> 
              <div>◇ GOOD LIGHTING</div>
            </div>
          </div>

          {/* FACE GUIDE */}
       
        </div>

        {/* CAPTURE BUTTON */}
        <div style={{
        position: "absolute",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "white",
        fontSize: "12px",
        letterSpacing: "1px"
        }}>

        {/* TEXT */}
        <span style={{ opacity: 0.9 }}>
            TAKE PICTURE
        </span>

        {/* BUTTON */}
        <div
            style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
            }}
        >
            {/* INNER WHITE */}
            <div className="center"
            style={{
            width: "62px",
            height: "62px",
            borderRadius: "50%",
            background: "white",
            color:"grey",

            }}>
                <div style={{
                    scale:"3",
                    position:"relative",
                    top:"5px",
                    left:"-0,5px"
                }} ><CiCamera /></div>
            </div> 
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