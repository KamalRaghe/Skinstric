"use client";

export default function SelectPage() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.left}>
          <span style={styles.brand}>SKINSTRIC</span>
          <span style={styles.intro}>[ INTRO ]</span>
        </div>

        <button style={styles.codeBtn}>ENTER CODE</button>
      </div>

      {/* Text */}
      <div style={styles.textWrap}>
        <h2 style={styles.title}>A.I. ANALYSIS</h2>
        <p style={styles.subtitle}>
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </p>
      </div>

      {/* Diamond Layout */}
      <div style={styles.center}>
        <div style={styles.grid}>
          <DiamondItem text="DEMOGRAPHICS" style={styles.top} />
          <DiamondItem text="SKIN TYPE DETAILS" style={styles.right} />
          <DiamondItem text="WEATHER" style={styles.bottom} />
          <DiamondItem text={"COSMETIC\nCONCERNS"} style={styles.leftBox} />
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Diamond Box */
function DiamondItem({ text, style }) {
  return (
    <div style={{ ...styles.box, ...style }}>
      <div style={styles.inner}>
        {text.split("\n").map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
}

const SIZE = 140;
const GAP = 14;

const styles = {
  page: {
    height: "100vh",
    background: "#f5f5f5",
    padding: "20px 40px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    display: "flex",
    gap: "10px",
  },

  brand: {
    fontWeight: 600,
  },

  intro: {
    color: "#888",
  },

  codeBtn: {
    background: "black",
    color: "white",
    border: "none",
    padding: "10px 16px",
  },

  textWrap: {
    marginTop: 40,
  },

  title: {
    fontSize: 18,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 1.6,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },

  grid: {
    position: "relative",
    width: SIZE * 2 + GAP,
    height: SIZE * 2 + GAP,
  },

  box: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    background: "#e7e7e7",
    transform: "rotate(45deg)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    transform: "rotate(-45deg)",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 500,
  },

  top: {
    left: SIZE / 2 + GAP / 2,
    top: 0,
  },

  right: {
    right: 0,
    top: SIZE / 2 + GAP / 2,
  },

  bottom: {
    left: SIZE / 2 + GAP / 2,
    bottom: 0,
  },

  leftBox: {
    left: 0,
    top: SIZE / 2 + GAP / 2,
  },
};