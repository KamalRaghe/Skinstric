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
  const router = useRouter();

  return (
    <div style={{ overflow: "hidden" }}>
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
        <div className="center" style={{ height: "78vh", width: "90%", display: "flex" }}>

          {/* LEFT */}
          <div className="center" style={{ width: "50%" }}>
            <div style={{ width: "300px", height: "300px", border: "1px dashed grey", position: "relative" }}>
              <div style={{ width: "100%", height: "100%", position: "relative" }}>

                <div style={{
                  width: "100%",
                  height: "100%",
                  border: "2px dashed grey",
                  position: "absolute",
                  animation: "rotate 50s linear infinite",
                  opacity: "0.6"
                }}/>

                {/* ICON */}
                <div style={{
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)"
                }}>
                  <MdOutlineCamera style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    background: "white",
                    scale: "2.8"
                  }}/>

                  {/* CONNECTOR (TOP RIGHT) */}
                  <div style={{
                    position: "absolute",
                    width: "90px",
                    height: "1px",
                    background: "#777",
                    transform: "rotate(-30deg)",
                    transformOrigin: "0% 50%",
                    left: "28px",
                    top: "-12px"
                  }}/>

                  <div style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    background: "#777",
                    borderRadius: "50%",
                    left: "100px",
                    top: "-35px"
                  }}/>

                  <div style={{
                    position: "absolute",
                    left: "110px",
                    top: "-48px",
                    fontSize: "11px",
                    color: "#444",
                    lineHeight: "1.3"
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
                  opacity: "0.6"
                }}/>

                {/* ICON */}
                <div style={{
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                  transform: "translate(-50%, -50%)"
                }}>
                  <FaMountainSun style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    padding: "6px",
                    background: "white",
                    scale: "2.5"
                  }}/>

                  {/* CONNECTOR (BOTTOM LEFT) */}
                  <div style={{
                    position: "absolute",
                    width: "90px",
                    height: "1px",
                    background: "#777",
                    transform: "rotate(150deg)",
                    transformOrigin: "0% 50%",
                    left: "-28px",
                    top: "12px"
                  }}/>

                  <div style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    background: "#777",
                    borderRadius: "50%",
                    left: "-100px",
                    top: "35px"
                  }}/>

                  <div style={{
                    position: "absolute",
                    left: "-170px",
                    top: "25px",
                    fontSize: "11px",
                    color: "#444",
                    lineHeight: "1.3",
                    textAlign: "right"
                  }}>
                    ALLOW A.I.<br/>
                    ACCESS GALLERY
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* BACK */}
        <div
          className="center"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer", position: "fixed", left: "2%", top: "88%" }}
        >
          <div
            className="center"
            style={{
              transform: "rotate(45deg)",
              border: "1px solid grey",
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          >
            <div className="center" style={{ transform: "rotate(-45deg)", scale: "2" }}>
              <GoTriangleLeft />
            </div>
          </div>
          <span style={{ marginLeft: "12px" }}>BACK</span>
        </div>
      </div>
    </div>
  );
}