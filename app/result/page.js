"use client";
import { useRef, useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { GoTriangleLeft } from "react-icons/go";

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
      <div className="center column" >
        <div className="center" style={{height:"78vh",width:"90%",display:"flex"}}>
        <div className="center"  style={{width:"50%",height:"100%"}}>
            <div className="center" style={{ 
            }}><MdOutlineCamera className="border" 
            style={{
              scale:"3",
              borderRadius:"50%",
              border:"1px solid black",
              width:"50px",
              height:"50px",
            }} /></div>
        </div>
        <div className="center"  style={{width:"50%",height:"100%"}}>
            <div style={{}}>
              <FaMountainSun
              style={{
              scale:"3",
              borderRadius:"50%",
              border:"1px solid black",
              width:"45px",
              height:"45px",
              padding:"3px"
            }} /> 
            </div>
        </div>
      </div>
       <div
          className="center"
          onClick={() => router.push('/')}
          style={{ cursor: "pointer" }}>
           <div className="center" 
            style={{
              transform: "rotate(45deg)",
              border: "1px solid grey",
              width: "50px",
              height: "50px",
              marginRight: "10px"
             }}>
              <div className="center" style={{ transform: "rotate(-45deg)", scale:"2"}}>
              <GoTriangleLeft />
              </div>
            </div>
            <span style={{marginLeft:"12px" }} >BACK</span>
         </div>
      </div>
      
    </div>
  );
}