"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [active, setActive] = useState("race");
  const [selected, setSelected] = useState("");
  const [isTablet, setIsTablet] = useState(false);

  // 🔥 NEW (1000px behavior)
  const [isCompact1000, setIsCompact1000] = useState(false);

  const format = (v) => {
    if (!v) return "0%";
    let n = typeof v === "string" ? parseFloat(v) : v;
    if (n <= 1) n *= 100;
    return `${Math.round(n)}%`;
  };

  const cap = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  const getTop = (obj) =>
    Object.entries(obj || {}).sort(
      (a, b) => parseFloat(b[1]) - parseFloat(a[1])
    )[0] || ["", "0%"];

  useEffect(() => {
    const check = () => setIsTablet(window.innerWidth <=900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔥 NEW
  useEffect(() => {
    const check = () => setIsCompact1000(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    let stored = localStorage.getItem("result");
    const parsed = JSON.parse(stored || "{}");
    const actual = parsed.result || parsed.data || parsed;

    const norm = {
      race: Object.fromEntries(
        Object.entries(actual.race || {}).map(([k, v]) => [k, format(v)])
      ),
      age: Object.fromEntries(
        Object.entries(actual.age || {}).map(([k, v]) => [k, format(v)])
      ),
      gender: Object.fromEntries(
        Object.entries(actual.gender || {}).map(([k, v]) => [
          k.toUpperCase(),
          format(v),
        ])
      ),
    };

    setData(norm);
    setSelected(getTop(norm.race)[0]);
  }, []);

  if (!data) return null;

  const current = data[active];
  const sorted = Object.entries(current).sort(
    (a, b) => parseFloat(b[1]) - parseFloat(a[1])
  );

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <b>SKINSTRIC</b>
          <span style={{ color: "#999", marginLeft: 10 }}>[ INTRO ]</span>
        </div>
        <div style={styles.codeBtn}>ENTER CODE</div>
      </div>

      {/* TITLE */}
      <div style={styles.titleWrap}>
        <div style={styles.small}>A.I. ANALYSIS</div>
        <div style={styles.big}>DEMOGRAPHICS</div>
        <div style={styles.small}>PREDICTED RACE & AGE</div>
      </div>

      {/* MAIN */}
      <div
        style={
          isTablet
            ? { display: "flex", flexDirection: "column", gap: 20 }
            : styles.main
        }
      >
        {/* LEFT */}
        <div style={styles.left}>
          {["race", "age", "gender"].map((key) => (
            <div
              key={key}
              onClick={() => {
                setActive(key);
                setSelected(getTop(data[key])[0]);
              }}
              style={{
                ...styles.leftItem,
                background: active === key ? "#111" : "#e5e5e5",
                color: active === key ? "#fff" : "#000",
              }}
            >
              <div style={{ fontWeight: "bold" }}>
                {cap(getTop(data[key])[0])}
              </div>
              <div style={{ fontSize: 12 }}>
                {key === "gender" ? "SEX" : key.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* CENTER (ONLY PART CHANGED) */}
        <div
          style={
            isCompact1000
              ? {
                  ...styles.center,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : styles.center
          }
        >
          {/* TEXT (hidden ≤1000px) */}
          {!isCompact1000 && (
            <div style={styles.topLeft}>
              {active === "age" ? `${selected} y.o.` : cap(selected)}
            </div>
          )}

          {/* CIRCLE */}
          <div style={isCompact1000 ? {} : styles.bottomRight}>
            <Circle value={current[selected]} />
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.rightHeader}>
            <span>{active.toUpperCase()}</span>
            <span>A.I. CONFIDENCE</span>
          </div>

          {sorted.map(([k, v]) => (
            <div
              key={k}
              onClick={() => setSelected(k)}
              style={{
                ...styles.row,
                background: selected === k ? "#111" : "transparent",
                color: selected === k ? "#fff" : "#000",
              }}
            >
              <span>◇ {cap(k)}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div onClick={() => router.push("/select")}>◀ BACK</div>
        <div>If A.I. estimate is wrong, select the correct one.</div>
        <div onClick={() => router.push("/")}>HOME ▶</div>
      </div>
    </div>
  );
}

/* CIRCLE */
function Circle({ value }) {
  const size = 250;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const percent = parseFloat(value || 0);
  const offset = c - (percent / 100) * c;

  return (
    <div style={{ position: "relative" }}>
      <svg width={size} height={size}>
        <circle cx="125" cy="125" r={r} stroke="#ddd" strokeWidth={stroke} fill="none" />
        <circle
          cx="125"
          cy="125"
          r={r}
          stroke="#111"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
        />
      </svg>

      <div style={styles.circleText}>{percent}%</div>
    </div>
  );
}

/* STYLES (UNCHANGED) */
const styles = {
  page: {
    fontFamily: "Arial",
    padding: "30px 40px",
    background: "#f5f5f5",
    height: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  codeBtn: {
    border: "1px solid black",
    padding: "6px 10px",
    fontSize: 12,
  },

  titleWrap: {
    marginBottom: 30,
  },

  small: {
    fontSize: 12,
    color: "#666",
  },

  big: {
    fontSize: 70,
    fontWeight: 500,
  },

  main: {
    display: "grid",
    gridTemplateColumns: "200px 1fr 300px",
    gap: 30,
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  leftItem: {
    padding: 15,
    cursor: "pointer",
  },

  center: {
    background: "#eee",
    padding: 30,
    position: "relative",
    minHeight: "350px",
  },

  topLeft: {
    position: "absolute",
    top: 30,
    left: 30,
    fontSize: 28,
  },

  bottomRight: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },

  right: {
    background: "#eee",
    padding: 20,
  },

  rightHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 12,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 8px",
    cursor: "pointer",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 40,
    fontSize: 12,
  },

  circleText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 28,
  },
};