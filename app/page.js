"use client";
import "./globals.css";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hideLeft, setHideLeft] = useState(null);
  const [hideRight, setHideRight] = useState(null);
  const [mainLeft, setMainLeft] = useState("center");
  const [mainRight, setMainRight] = useState("center");
  const [loaded, setLoaded] = useState(false);
  const [moveCenter, setMoveCenter] = useState("");
  const [isCompact, setIsCompact] = useState(false);
  const router = useRouter();

  // original logic
  useEffect(() => {
    if (!loaded) {
      const timer = setTimeout(() => {
        setHideRight(false);
        setHideLeft(false);
      }, 600);
      setTimeout(() => {
        setMainLeft("center");
        setMainRight("center");
      }, 2000);
      return () => clearTimeout(timer);
    }
  });

  // breakpoint logic
  useEffect(() => {
    const check = () => setIsCompact(window.innerWidth <= 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isCompact ? (
    // ================= COMPACT (≤1000px) =================
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* TOP */}
      <div className="center" style={{ justifyContent: "space-between" }}>
        <div style={{ margin: "15px" }}>
          SKINSTRC <span style={{ color: "grey" }}>[ INTRO ]</span>
        </div>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            marginTop: "15px",
            fontSize: "12px",
          }}
        >
          Enter Code
        </button>
      </div>

      {/* CENTER DIAMOND */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "min(70vw, 500px)",
            height: "min(70vw, 500px)",
            transform: "rotate(45deg)",
            border: "1px solid rgba(0,0,0,0.2)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* INNER */}
          <div
            style={{
              position: "absolute",
              width: "85%",
              height: "85%",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              transform: "rotate(-45deg)",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            <div style={{ fontSize: "80px" }}>
              Sophisticated <br /> skincare
            </div>

            <div style={{ fontSize: "12px", marginTop: "15px", color: "#555" }}>
              Skinstric developed an A.I. that creates a highly-personalized
              routine tailored to what your skin needs.
            </div>

            <div
              onClick={() => router.push("/testing")}
              style={{
                marginTop: "20px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              ENTER EXPERIENCE
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  transform: "rotate(45deg)",
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                }}
              >
                <span
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                >
                  ▶
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // ================= DESKTOP (YOUR ORIGINAL CODE) =================
    <div
      style={{
        height: "100vh",
        padding: "0",
        margin: "0px",
        overflow: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="center" style={{ justifyContent: "space-between" }}>
        <div style={{ margin: "15px" }}>
          SKINSTRC <span style={{ color: "grey" }}>[ INTRO ]</span>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              marginTop: "15px",
              fontSize: "12px",
            }}
          >
            Enter Code
          </button>
        </div>
      </div>

      <div
        className="center"
        style={{ justifyContent: "space-between", height: "75vh" }}
      >
        {/* LEFT */}
        <button
          className={mainLeft}
          style={{
            opacity: hideLeft ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        >
          <div
            className="center"
            onMouseEnter={() => {
              setLoaded(true);
              setMoveCenter("moveRight");
              setTimeout(() => setHideRight(true), 600);
            }}
            onMouseLeave={() => {
              setLoaded(false);
              setMoveCenter("");
            }}
            style={{
              transform: "rotate(45deg)",
              border: "1px dashed grey",
              width: "300px",
              height: "300px",
              position: "relative",
              right: "175px",
            }}
          >
            <div
              className="border"
              style={{
                display: "inline-block",
                border: "1px solid black",
                margin: "15px",
                position: "relative",
                left: "40px",
                bottom: "40px",
              }}
            >
              <div
                className="center"
                style={{
                  scale: "2",
                  transform: "rotate(-45deg)",
                  width: "44px",
                  height: "45px",
                  position: "relative",
                  right: "2px",
                }}
              >
                <GoTriangleLeft />
              </div>
            </div>
          </div>
          <span style={{ position: "relative", right: "230px" }}>
            Discover A.I.
          </span>
        </button>

        {/* CENTER TEXT */}
        <div
          className="heading center column fadeIN"
          style={{
            scale: "1.4",
            position: "relative",
            width: "300px",
            transition: "all 1.8s ease",
            zIndex: "30",
          }}
        >
          <div
            className="topText"
            style={{
              transition: "all 1.8s ease",
              transform:
                moveCenter === "moveLeft"
                  ? "translateX(-18vw)"
                  : moveCenter === "moveRight"
                  ? "translateX(17vw)"
                  : "translateX(0)",
            }}
          >
            Sophisticated
          </div>

          <div
            className="bottomText"
            style={{
              transition: "all 1.8s ease",
              transform:
                moveCenter === "moveLeft"
                  ? "translateX(-24.5vw)"
                  : moveCenter === "moveRight"
                  ? "translateX(23.5vw)"
                  : "translateX(0)",
            }}
          >
            Skincare
          </div>
        </div>

        {/* RIGHT */}
        <button
          className="center FadeAway"
          style={{
            opacity: hideRight ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        >
          <span style={{ position: "relative", left: "215px", zIndex: "20" }}>
            Take test
          </span>

          <div
            className={mainRight}
            onClick={() => router.push("/testing")}
            onMouseEnter={() => {
              setLoaded(true);
              setMoveCenter("moveLeft");
              setTimeout(() => setHideLeft(true), 600);
            }}
            onMouseLeave={() => {
              setLoaded(false);
              setMoveCenter("");
            }}
            style={{
              transform: "rotate(45deg)",
              border: "1px dashed grey",
              width: "300px",
              height: "300px",
              position: "relative",
              left: "180px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                scale: "2",
                padding: "1px",
                position: "relative",
                right: "50px",
                top: "50px",
              }}
            >
              <div
                className="center"
                style={{ transform: "rotate(-45deg)", scale: "0.79" }}
              >
                <GoTriangleRight />
              </div>
            </div>
          </div>
        </button>
      </div>

      <div
        className="center"
        style={{
          justifyContent: "start",
          width: "316px",
          height: "72px",
          margin: "15px",
        }}
      >
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE
        TAILORED TO WHAT YOUR SKIN NEEDS.
      </div>
    </div>
  );
}