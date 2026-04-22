"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Select() {
  const [hoverTop, setHoverTop] = useState(false);

  const router = useRouter()

  return (
    <div className="border"
      style={{
        height: "97vh",
        overflowY: "hidden",
        cursor:"pointer"
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          fontSize: "10px",
          background: "white",
        }}
      >
        <div>
          <span style={{ fontWeight: "bold" }}>SKINSTRIC</span>
          <span style={{ color: "grey", marginLeft: "10px" }}>
            [ INTRO ]
          </span>
        </div>

        <button
          style={{
            background: "black",
            color: "white",
            padding: "10px",
            fontSize: "9px",
            fontWeight: "bold",
            border: "none",
          }}
        >
          ENTER CODE
        </button>
      </div>

      {/* TEXT */}
      <div
        style={{
          fontWeight: "bold",
          width: "150px",
          margin: "0 20px",
          paddingRight: "30px",
        }}
      >
        A.I. ANALYSIS
      </div>

      <div style={{ width: "450px", margin: "5px 20px" }}>
        A.I. has estimated the following.
      </div>

      <div style={{ width: "450px", margin: "5px 20px" }}>
        Fix estimated information if needed.
      </div>

      {/* DIAMOND WRAPPER */}
       <div className="center"
        style={{
          transform: "rotate(45deg)",
          position:"relative",
          bottom:"20px",
        }}
      >
        <div className=" center" style={{ position: "relative", width: "330px", height: "330px" }}>
          
          {/* 🔥 BIG BORDER OVERLAY (this is what animates) */}
          <div className="center"
            style={{
              inset: 0,
              border: "1px dashed grey",
              opacity: hoverTop ? 1 : 0,
              transform: hoverTop ? "scale(1.3)" : "scale(1.1)",
              transition: "all 0.4s ease",
              transformOrigin: "center", 
              pointerEvents: "none", // important
            }}
          />

          {/* GRID */}
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "5px",
              position:"relative",
              bottom:"15px",
              left:"-10px",
              fontWeight:"bold",
              fontSize:"18px" 
            }}
          >
            {/* TOP DIAMOND */}
            <div
              onMouseEnter={() => setHoverTop(true)}
              onMouseLeave={() => setHoverTop(false)}
              onClick={()=>{router.push('/test')}}
              className="center"
              style={{ backgroundColor: '#E1E1E2' }}
            >
                <div className="center" style={{transform:"rotate(-45deg)",width:"154px",height:"154px"}}>
                    Demographic
                </div>
            </div> 

            <div className="center" style={{ backgroundColor:"#F3F3F4", cursor: "not-allowed" ,width:"154px",height:"154px"}} >
                <div style={{transform:"rotate(-45deg"}} >Skin type details</div>
            </div> 
            <div className="center" style={{ backgroundColor:"#F3F3F4", cursor: "not-allowed",width:"154px",height:"154px" }} >
                <div className="center" style={{
                    width:"100px",
                    transform:"rotate(-45deg",
                    }} >Cosmetic Concerns</div>
            </div> 
            <div className="center" style={{ backgroundColor:"#F3F3F4", cursor: "not-allowed",width:"154px",height:"154px" }} >
                <div style={{transform:"rotate(-45deg"}} >Weather</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}