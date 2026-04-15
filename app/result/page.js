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
      
    </div>
  );
}