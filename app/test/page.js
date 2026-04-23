"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { relative } from "node:path";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [active, setActive] = useState("race");
  const [selected, setSelected] = useState("");

  const format = (v) => {
    if (v == null) return "0%";
    let n = typeof v === "string" ? parseFloat(v) : v;
    if (n <= 1) n *= 100;
    return `${Math.round(n)}%`;
  };

  const getTop = (obj) => {
    if (!obj) return ["", "0%"];
    return Object.entries(obj).sort(
      (a, b) => parseFloat(b[1]) - parseFloat(a[1])
    )[0];
  };

  const cap = (str) =>
    str.replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    const stored = localStorage.getItem("result");
    if (!stored) return;

    const parsed = JSON.parse(stored);
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
    <div style={s.page}>
      {/* TOP */}
      <div style={s.top}>
        <div>
          <b>SKINSTRIC</b>
          <span style={{ color: "#888" }}> [ INTRO ]</span>
        </div>
        <div style={s.codeBtn}>ENTER CODE</div>
      </div>

      <div style={s.header}>A.I. ANALYSIS</div>
      <div style={s.title}>DEMOGRAPHICS</div>
      <div style={s.sub}>PREDICTED RACE & AGE</div>

      <div style={s.main}>
        {/* LEFT */}
        <div style={s.left}>
          {[
            { key: "race", label: "RACE" },
            { key: "age", label: "AGE" },
            { key: "gender", label: "SEX" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => {
                setActive(item.key);
                setSelected(getTop(data[item.key])[0]);
              }}
              style={{
                ...s.leftBox,
                background: active === item.key ? "#111" : "#E5E5E5",
                color: active === item.key ? "#fff" : "#000",
              }}
            >
              <div>{getTop(data[item.key])[0]}</div>
              <br></br>
              <div style={s.leftLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={s.center}>
          <div style={s.centerTitle}>
            {active === "age" ? `${selected} y.o.` : cap(selected)}
          </div>

          <div style={s.circleWrap}>
            <Circle value={current[selected]} />
          </div>
        </div>

        {/* RIGHT */}
        <div style={s.right}>
          <div style={s.rightHead}>
            <span>{active.toUpperCase()}</span>
            <span>A.I. CONFIDENCE</span>
          </div>

          {sorted.map(([k, v]) => (
            <div
              key={k}
              onClick={() => setSelected(k)}
              style={{
                ...s.row,
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

      {/* BOTTOM */}
      <div style={s.bottom}>
        <div style={s.navGroup} onClick={() => router.push("/select")}>
          <div style={s.diamond}>
            <span style={s.arrow}>◀</span>
          </div>
          <span style={{margin:'10px'}}>BACK</span>
        </div>

        <div style={s.note}>
          If A.I. estimate is wrong, select the correct one.
        </div>

        <div style={s.navGroup} onClick={() => router.push("/")}>
          <span style={{margin:"10px"}} >Home</span>
          <div style={s.diamond}>
            <span style={s.arrow}>▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* CIRCLE */
function Circle({ value }) {
  const size = 360; // 🔥 bigger
  const stroke = 10; // slightly thicker looks better when bigger
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const center = size / 2;

  const percent = parseFloat(value?.replace("%", "") || 0);
  const offset = c - (percent / 100) * c;

  return (
    <div style={{ position: "relative" }}>
      <svg width={size} height={size}>
        <circle cx={center} cy={center} r={r} stroke="#d0d0d0" strokeWidth={stroke} fill="none" />
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="#111"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 36, // 🔥 scale text too
      }}>
        {percent}%
      </div>
    </div>
  );
}
/* STYLES */
const s = {
  page: {
    fontFamily: "Helvetica, Arial",
    background: "#FFF",
    minHeight: "100vh",
    padding: "24px 40px",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    fontSize: 12,
  },

  codeBtn: {
    background: "#111",
    color: "#fff",
    padding: "8px 14px",
    fontSize: 10,
  },

  header: { fontSize: 11, letterSpacing: 2 },
  title: { fontSize: 72 },
  sub: { fontSize: 12, marginBottom: 30 },

  main: {
    display: "grid",
    gridTemplateColumns: "240px 1fr 340px",
    gap: 30,
    width: "100%",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  leftBox: {
    padding: 10,
    width:"60%",
    height:"80px",
    borderTop:"1px solid black",
    cursor: "pointer",
  },

  leftLabel: {
    fontSize: 11,
    marginTop: 6,
  },

  center: {
    background: "#E5E5E5",
    borderTop: "2px solid black",
    width:"105%",
    height:"300px",
    position:"relative",
    right:"90px",
    padding: "60px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  centerTitle: {
    fontSize: 32,
    position: 'relative',
    bottom:"180px",
    right:"25px"  
  },

  circleWrap: {
    display: "flex",
    position:"relative",
    top:"25px",
    left:"30px",
  },

  right: {
    background: "#E5E5E5",
    borderTop: "2px solid #aaa",
    position:"relative",
    left:"9px",
  },

  rightHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 14px",
    fontSize: 11,
    borderBottom: "1px solid #ccc",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px",
    borderBottom: "1px solid #ddd",
    fontSize: 12,
    cursor: "pointer",
  },

  percent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 32,
  },

  bottom: {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },

  diamond: {
    width: 36,
    height: 36,
    border: "1px solid #000",
    transform: "rotate(45deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    transform: "rotate(-45deg)",
  },

  note: {
    color: "#777",
    fontSize: 12,
  },
};