"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState("gender");
  const [selected, setSelected] = useState(null);

  const getTop = (obj) =>
    Object.entries(obj).sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))[0];

  useEffect(() => {
    const temp = {
      race: {
        "South asian": "77%",
        White: "10%",
        "East asian": "7%",
        "Middle eastern": "4%",
      },
      age: {
        "10-19": "1%",
        "20-29": "0%",
        "30-39": "54%",
        "40-49": "20%",
      },
      gender: {
        Male: "86%",
        Female: "13%",
      },
    };

    setData(temp);
    setSelected(getTop(temp.gender)[0]);
  }, []);

  if (!data) return <div style={{ padding: 40 }}>Loading...</div>;

  const current = data[active];

  return (
    <div style={styles.page}>
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
      <div style={styles.headerSmall}>A.I. ANALYSIS</div>
      <div style={styles.title}>DEMOGRAPHICS</div>
      <div style={styles.subtitle}>PREDICTED RACE & AGE</div>

      <div style={styles.layout}>

        {/* LEFT */}
        <div style={styles.left}>
          <Card
            label="RACE"
            value={getTop(data.race)[0]}
            active={active === "race"}
            onClick={() => {
              setActive("race");
              setSelected(getTop(data.race)[0]);
            }}
          />

          <Card
            label="AGE"
            value={getTop(data.age)[0]}
            active={active === "age"}
            onClick={() => {
              setActive("age");
              setSelected(getTop(data.age)[0]);
            }}
          />

          <Card
            label="SEX"
            value={getTop(data.gender)[0]}
            active={active === "gender"}
            onClick={() => {
              setActive("gender");
              setSelected(getTop(data.gender)[0]);
            }}
          />
        </div>

        {/* CENTER (TITLE + CIRCLE SIDE BY SIDE) */}
        <div style={styles.centerWrap}>

          <div style={styles.centerText}>
            <div style={{ fontSize: 48 }}>{selected}</div>
            <div style={{ fontSize: 14, opacity: 0.6, marginTop: 10 }}>
            </div>
          </div>

          <Circle value={current[selected]} />

        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.rightHeader}>
            <span>{active.toUpperCase()}</span>
            <span>A.I. CONFIDENCE</span>
          </div>

          {Object.entries(current)
            .sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))
            .map(([k, v]) => (
              <div
                key={k}
                onClick={() => setSelected(k)}
                style={{
                  ...styles.row,
                  background: selected === k ? "#111" : "transparent",
                  color: selected === k ? "#fff" : "#000",
                }}
              >
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

/* 🔵 CIRCLE */
function Circle({ value }) {
  const size = 260;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const percent = parseFloat(value?.replace("%", "") || 0);
  const offset = c - (percent / 100) * c;

  return (
    <svg width={size} height={size}>
      <circle cx="130" cy="130" r={r} stroke="#ddd" strokeWidth={stroke} fill="none" />

      <circle
        cx="130"
        cy="130"
        r={r}
        stroke="#111"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "center",
          transition: "0.5s",
        }}
      />

      <text x="50%" y="50%" textAnchor="middle" fontSize="40">
        {percent}%
      </text>
    </svg>
  );
}

/* 🧩 CARD */
function Card({ label, value, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      padding: 20,
      marginBottom: 10,
      background: active ? "#111" : "#f3f3f3",
      color: active ? "#fff" : "#000",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: 14, opacity: 0.6 }}>{value}</div>
      <div style={{ fontWeight: "bold", marginTop: 10 }}>{label}</div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#fff",
  },

  headerSmall: {
    position:"relative",
    left:"20px",
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    position:"relative",
    left:"20px",
    fontSize: 70,
    fontWeight: 500,
  },

  subtitle: {
    position:"relative",
    left:"20px",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 14,
  },

  layout: {
    display: "flex",
    gap: 40,
    alignItems: "center",
  },

  left: {
    width: 220,
  },

  /* 🔥 NEW CENTER LAYOUT */
  centerWrap: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },

  centerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  right: {
    width: 280,
  },

  rightHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    marginBottom: 10,
    opacity: 0.6,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: 12,
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
};