"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoadingPage() {
  const  router = useRouter()
  useEffect(()=>{

    setTimeout(() => {
        useRouter('/select')
    }, 1000);

  },[])
  return (
    <div className="" >
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
        <div className="center" style={{ height: "82vh" }} >
      <div className="center" style={{ position: "relative" }}>

        {/* ROTATING DIAMONDS */}
        <div className="outer center" style={{ position: "absolute" }}>
          <div className="middle center">
            <div className="inner center" />
          </div>
        </div>

        {/* STATIC TEXT (not inside rotating divs) */}
        <div className="center column" style={{ width:"500px",position: "absolute" }}>
         
            PREPARING YOUR ANALYSIS...

          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}