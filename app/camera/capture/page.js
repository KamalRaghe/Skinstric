"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";
import { GoTriangleLeft } from "react-icons/go";

export default function Page() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [click, setClick] = useState();
  const [captured, setCaptured] = useState(false);
  const router = useRouter()

  // 🎥 START CAMERA
  const startCamera = async () => {
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
  };

  useEffect(() => {
    startCamera();
  }, []);

  // 📸 TAKE PICTURE
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
    setCaptured(true);

    // 🔌 STOP CAMERA
    const stream = video.srcObject;
    stream.getTracks().forEach(track => track.stop());

    // ⚡ FLASH EFFECT
    document.body.style.background = "white";
    setTimeout(() => {
      document.body.style.background = "";
    }, 100);
  };

  // 🔁 RETAKE
  const retake = async () => {
    setPhoto(null);
    startCamera();
  };

  return (
    <div style={{ height: "97vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
          fontWeight: "bold",
          border: "none"
        }}>
          ENTER CODE
        </button>
      </div>

      {/* CAMERA SECTION */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>

        {/* VIDEO OR PHOTO */}
        {photo ? (
          <img
            src={photo}
            alt="capture"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
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
        )}

        {/* HIDDEN CANVAS */}
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {/* OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.2)"
        }} />

      {click && <div style={{
        position: "absolute",
        top: "40%",
        left:"45%",
        width: "100%",
        color: "white",
        fontSize: "14px",
        zIndex:"9",
        width:"150px",
        height:"120px",
        color:"black",
        backgroundColor:"lightgrey",
        borderRadius:"20px"
      }} >
       <div className="center column"
      style={{height:"100%"}}
      >
         <div className="center" 
          style={{fontSize:"18px",opacity:"0.5"}}
          >
            Analyzing 
            Image
          </div>
         <div className="dots center">
            <span></span>
            <span></span>
            <span></span>
          </div> 
      </div> 
      </div>}
    

        {/* TEXT */}
        {!photo && (
          <div className="center column" style={{
            position: "absolute",
            top: "65%",
            width: "100%",
            color: "white",
            fontSize: "14px",
          }}>
            FOR BEST RESULTS MAKE SURE TO HAVE
            <div style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              fontSize: "12px"
            }}>
              <div>◇ NEUTRAL EXPRESSION</div>
              <div>◇ FRONTAL POSE</div>
              <div>◇ GOOD LIGHTING</div>
            </div>
          </div>
        )}

        {photo && <div 
        className="center" 
        style={{
            zIndex:"10",
            position: "absolute",
            top: "30%",
            width: "100%",
            color: "white",
            fontSize: "14px",
        }}
        >
            GREAT SHOT!    
        </div>}
        {photo && <div 
        className="center column" 
        style={{
            zIndex:"10",
            position: "absolute",
            top: "75%",
            width: "100%",
            color: "white",
            fontSize: "14px",
        }}
        >
            <div style={{
              fontWeight:"bold",
              fontSize:"16px",
              margin:"20px"  
            }} >Preview</div>
           <div className="center" style={{width:"400px"}} >
                 <button
                 onClick={retake}
                    style={{
                        color:"black",
                        border:"1px solid black",
                        backgroundColor:"lightgrey",
                        padding:"10px"
                    }}
                    >Retake
                </button> 
                <button
                onClick={()=>{setClick(true)}}
                    style={{
                        color:"white",
                        border:"1px solid black",
                        backgroundColor:"#111",
                        padding:"10px",
                        position:"relative",
                        left:"30px"
                    }}
                    >Use This Photo
                </button> 
           </div>
        </div>}

        {/* BUTTON */}
        {!photo && <div style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "white",
          fontSize: "12px"
        }}>

          <span>TAKE PICTURE</span>

          <div
            onClick={takePicture}
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
            <div style={{
              width: "62px",
              height: "62px",
              borderRadius: "50%",
              background: photo ? "transparent" : "white",
              border: photo ? "2px solid white" : "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <CiCamera size={28} color={photo ? "white" : "black"} />
            </div>
          </div>
        </div>}

        {/* BACK */}
         <div className="center"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer", position: "fixed", left: "2%", top: "88%", color:"white" }}>
          
          <div style={{
            transform: "rotate(45deg)",
            border: "1px solid grey",
            width: "50px",
            height: "50px",
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{ transform: "rotate(-45deg)", scale: "2" }}>
              <GoTriangleLeft />
            </div>
          </div>

          <span style={{ marginLeft: "12px" }}>BACK</span>
        </div>

      </div>
    </div>
  );
}