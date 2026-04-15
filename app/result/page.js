"use client";
import { useRef, useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";

export default function ScanPage() {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  async function handleCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error(err);
    }
  }

  function handleGallery(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div>
       <div className="center" style={{justifyContent:"space-between",margin:"8px 0px"}} >
          <div style={{margin:"15px", fontSize:'12px'}}>
            <span style={{fontWeight:"bold",fontSize:"10px",margin:"4px"}} >SKINSTRC</span> 
            <span style={{color:"grey"}} >[ INTRO ]</span></div>
          <div>
        <button 
        style={{
            backgroundColor:"black",
            color:'white',
            padding:"10px",
            marginTop:"15px",
            fontSize:"12px"}} >Enter Code</button></div>
     </div>
       <div style={{
        fontWeight:"bold",
        position:"relative",
        left:"22px",
        fontSize:"12px"}} >
            To START ANALYSIS
        </div>
      <div className="border center" style={{height:"75vh"}}>
        <div style={{}}><MdOutlineCamera /></div>
      </div>
      
    </div>
  );
}