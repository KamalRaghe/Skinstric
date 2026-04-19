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

      {/* Title */}
      <div style={styles.textWrap}>
        <h2 style={styles.title}>A.I. ANALYSIS</h2>
        <p style={styles.subtitle}>
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </p>
      </div>

      {/* Diamond Grid */}
      <div style={styles.diamondWrapper}>
        <div style={styles.diamond}>
          <div style={{ ...styles.box, ...styles.top }}>DEMOGRAPHICS</div>
          <div style={{ ...styles.box, ...styles.right }}>SKIN TYPE DETAILS</div>
          <div style={{ ...styles.box, ...styles.bottom }}>WEATHER</div>
          <div style={{ ...styles.box, ...styles.leftBox }}>
            COSMETIC
            <br />
            CONCERNS
          </div>
        </div>
      </div>
    </div>
  );
}

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
    alignItems: "center",
  },

  brand: {
    fontWeight: "600",
    letterSpacing: "1px",
  },

  intro: {
    color: "#888",
  },

  codeBtn: {
    background: "black",
    color: "white",
    border: "none",
    padding: "10px 16px",
    cursor: "pointer",
  },

  textWrap: {
    marginTop: "40px",
  },

  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "13px",
    color: "#333",
    lineHeight: "1.6",
  },

  diamondWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },

  diamond: {
    position: "relative",
    width: "300px",
    height: "300px",
    transform: "rotate(45deg)",
  },

  box: {
    position: "absolute",
    width: "150px",
    height: "150px",
    background: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "500",
    padding: "10px",
  },

  top: {
    top: 0,
    left: "75px",
  },

  right: {
    right: 0,
    top: "75px",
  },

  bottom: {
    bottom: 0,
    left: "75px",
  },

  leftBox: {
    left: 0,
    top: "75px",
  },
};