"use client";
import { useRef, useState } from "react";

export default function ScanPage() {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  // 📸 Camera
  async function handleCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error(err);
    }
  }

  // 🖼️ Gallery
  function handleGallery(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className="container">
      <h3 className="title">TO START ANALYSIS</h3>

      <div className="main">
        {/* LEFT - CAMERA */}
        <div className="option" onClick={handleCamera}>
          <div className="circle">📷</div>
          <p>ALLOW A.I.<br />TO SCAN YOUR FACE</p>
          <video ref={videoRef} autoPlay className="video" />
        </div>

        {/* RIGHT - GALLERY */}
        <div className="option" onClick={() => fileInputRef.current.click()}>
          <div className="circle">🖼️</div>
          <p>ALLOW A.I.<br />ACCESS GALLERY</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleGallery}
            hidden
          />
        </div>

        {/* PREVIEW */}
        <div className="preview">
          <p>Preview</p>
          {preview && <img src={preview} />}
        </div>
      </div>

      <button className="back">◀ BACK</button>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f8f8f8;
        }

        .title {
          margin-bottom: 40px;
          font-weight: 400;
          letter-spacing: 2px;
        }

        .main {
          display: flex;
          align-items: center;
          gap: 100px;
        }

        .option {
          text-align: center;
          cursor: pointer;
        }

        .circle {
          width: 100px;
          height: 100px;
          border: 2px solid black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin-bottom: 10px;
        }

        .preview {
          width: 150px;
          height: 150px;
          border: 1px solid #ccc;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video {
          width: 150px;
          margin-top: 10px;
        }

        .back {
          position: absolute;
          bottom: 20px;
          left: 20px;
          border: none;
          background: transparent;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}