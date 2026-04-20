"use client";
import { useRef, useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { GoTriangleLeft } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [click, setClick] = useState()
  const router = useRouter();

  const [base64, setBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // remove prefix
    reader.onerror = (error) => reject(error);
  });

  const analyzeImage = async () => {
  try {
    setLoading(true);

    const res = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64,
        }),
      }
    );

    const data = await res.json();

    setResult(data);
    setLoading(false);
    localStorage.setItem("result", JSON.stringify(data));
    console.log("RESULT:", data);

    setTimeout(() => {
      router.push("/select");
    }, 1000);
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
};

  return (
    <div style={{ overflow: "hidden" }}>
      {click && <div style={{
        position:"fixed",
        border:"1px solid black",
        top: "50%",
        left: "50%",
        transform: "translate(-55%, -20%)",
        zIndex:"10",
        backgroundColor:"black",
      }} >
        <div style={{
          padding:"20px",
          paddingBottom:"50px",
          fontWeight:"bold",
          backgroundColor:"black",
          color:"white",
          borderBottom:"1px solid white",
        }}
        >ALLOW A.I. TO ACCESS YOUR CAMERA</div>
        <div className=""
        style={{
          padding:"10px",
          display:"flex",
          justifyContent:"end",
          backgroundColor:"black",
          color:"white",
        }} 
         >
          <div
          style={{
            backgroundColor:"black",
            color:"white",
            opacity:"0.6",
            cursor:"pointer"
          }}
          onClick={()=>setClick()}
          >
            Deny
          </div>
          <div 
          onClick={()=>{router.push('/camera')}}
          style={{
          marginLeft:"50px",  
          backgroundColor:"black",
          color:"white",
          cursor:"pointer"
        }} >
            Allow
          </div>
        </div>
      </div>}
      <div className="center" style={{ justifyContent: "space-between", margin: "8px 0px" }}>
        <div style={{ margin: "15px", fontSize: "12px" }}>
          <span style={{ fontWeight: "bold", fontSize: "10px", margin: "4px" }}>
            SKINSTRC
          </span>
          <span style={{ color: "grey" }}>[ INTRO ]</span>
        </div>
        <button style={{ backgroundColor: "black", color: "white", padding: "10px", marginTop: "15px", fontSize: "12px" }}>
          Enter Code
        </button>
      </div>

      <div style={{ fontWeight: "bold", position: "relative", left: "22px", fontSize: "12px" }}>
        To START ANALYSIS
      </div>

      <div className="center column">
        <div className="center smallScreen" style={{ height: "78vh", width: "90%", display: "flex" }}>

          {/* LEFT */}
          <div className="center" style={{ width: "50%", marginBottom:'100px' }}>
            <div style={{ width: "300px", height: "300px", border: "1px dashed grey", position: "relative" }}>
              <div style={{ width: "100%", height: "100%", position: "relative" }}>

                <div style={{
                  width: "100%",
                  height: "100%",
                  border: "2px dashed grey",
                  position: "absolute",
                  animation: "rotate 50s linear infinite",
                  opacity: "0.3"
                }}/>

                <MdOutlineCamera style={{
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  background: "white",
                  scale: "2.8"
                }}
                onClick={()=>{setClick(true)}}
                />

                {/* ✅ TOP RIGHT CONNECTOR */}
                <div style={{
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)"
                }}>
                  {/* line */}
                  <div style={{
                    position: "absolute",
                    width: "95px",
                    height: "2px",
                    background: "#6f6f6f",
                    transform: "rotate(-41deg)",
                    transformOrigin: "0% 50%",
                    left: "5px",   // starts at circle edge
                    top: "-85px"
                  }}/>
                  <div style={{
                    position: 'relative',
                    top:"-150px",
                    left:"75px",
                    width: "4px",
                    height: "4px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}/>
                  {/* text */}
                  <div style={{
                    position: "absolute",
                    width:"150px",
                    left: "85px",
                    top: "-162px",
                    fontSize: "13px",
                    color: "#444",
                    lineHeight: "1.3",
                    letterSpacing: "0.3px"
                  }}>
                    ALLOW A.I.<br/>
                    TO SCAN YOUR FACE
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="center" style={{ width: "50%" }}>
            <div style={{ width: "300px", height: "300px", border: "1px dashed grey", position: "relative" }}>
              <div style={{ width: "100%", height: "100%", position: "relative" }}>

                <div style={{
                  width: "100%",
                  height: "100%",
                  border: "2px dashed grey",
                  position: "absolute",
                  animation: "rotate 50s linear infinite",
                  opacity: "0.3"
                }}/>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const base64String = await toBase64(file);

                      // 🔥 directly send (no state delay issues)
                      analyzeImage(base64String);
                    }}}
                />
                  
                <FaMountainSun
                onClick={() => fileInputRef.current.click()}
                 style={{
                  cursor: "pointer" ,
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  padding: "6px",
                  background: "white",
                  scale: "2.5"
                }}/>
                {/* ✅ BOTTOM LEFT CONNECTOR */}
                <div style={{
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)"
                }}>
                  {/* line */}
                  <div style={{
                    position: "absolute",
                    width: "95px",
                    height: "2px",
                    background: "#6f6f6f",
                    transform: "rotate(141deg)",
                    transformOrigin: "0% 50%",
                    left: "-85px",   // starts at circle edge
                    top: "15px"
                  }}/>
                  <div style={{
                    position: 'relative',
                    top:"75px",
                    left:"-164px",
                    width: "4px",
                    height: "4px",
                    border: "1px solid black",
                    borderRadius: "50%",
                    zIndex:"2",
                  }}/>
                  {/* text */}
                  <div style={{
                    position: "absolute",
                    width:"150px",
                    left: "-312px",
                    top: "75px",
                    fontSize: "13px",
                    color: "#444",
                    lineHeight: "1.3",
                    letterSpacing: "0.3px",
                    textAlign:"end"
                  }}>
                    ALLOW A.I.<br/>
                    TO SCAN YOUR FACE
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BACK */}
        <div className="center"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer", position: "fixed", left: "2%", top: "88%" }}>
          
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