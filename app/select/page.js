"use client";

export default function SelectPage() {
  return (
    <div style={styles.page}>
      {/* 🔹 Top Bar */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.logo}>SKINSTRIC</span>
          <span style={styles.divider}>[ INTRO ]</span>
        </div>

        <button style={styles.codeBtn}>ENTER CODE</button>
      </div>

      {/* 🔹 Text */}
      <div style={styles.textWrap}>
        <h2 style={styles.title}>A.I. ANALYSIS</h2>
        <p style={styles.subtitle}>
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </p>
      </div>

      {/* 🔷 BIG DIAMOND */}
      <div style={styles.center}>
        <div style={styles.diamond}>
          {/* 4 Sections */}
          <Section text="DEMOGRAPHICS" style={styles.top} />
          <Section text="SKIN TYPE DETAILS" style={styles.right} />
          <Section text="WEATHER" style={styles.bottom} />
          <Section text={"COSMETIC\nCONCERNS"} style={styles.left} />
        </div>
      </div>
    </div>
  );
}

/* 🔹 Section Component */
function Section({ text, style }) {
  return (
    <div style={{ ...styles.section, ...style }}>
      <div style={styles.inner}>
        {text.split("\n").map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
}

const SIZE = 420;

const styles = {
  page: {
    height: "100vh",
    background: "#f6f6f6",
    padding: "20px 40px",
    fontFamily: "Arial, sans-serif",
  },

  /* 🔹 Header */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
  },

  headerLeft: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },

  logo: {
    fontWeight: 600,
    letterSpacing: "1px",
  },

  divider: {
    color: "#888",
  },

  codeBtn: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    fontSize: "12px",
    cursor: "pointer",
  },

  /* 🔹 Text */
  textWrap: {
    marginTop: "40px",
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "12px",
    color: "#333",
    lineHeight: "1.6",
  },

  /* 🔷 Diamond */
  center: {
    height: "65%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  diamond: {
    position: "relative",
    width: SIZE,
    height: SIZE,
    transform: "rotate(45deg)",
  },

  section: {
    position: "absolute",
    width: "50%",
    height: "50%",
    background: "#e9e9e9",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    transform: "rotate(-45deg)",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 500,
  },

  /* positions */
  top: {
    top: 0,
    left: "25%",
  },

  right: {
    right: 0,
    top: "25%",
  },

  bottom: {
    bottom: 0,
    left: "25%",
  },

  left: {
    left: 0,
    top: "25%",
  },
};