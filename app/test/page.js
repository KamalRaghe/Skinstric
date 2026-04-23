"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [active, setActive] = useState("race");
  const [selected, setSelected] = useState("");

  const format = (v) => {
    if (!v) return "0%";
    let n = typeof v === "string" ? parseFloat(v) : v;
    if (n <= 1) n *= 100;
    return `${Math.round(n)}%`;
  };

  const getTop = (obj) =>
    Object.entries(obj || {}).sort(
      (a, b) => parseFloat(b[1]) - parseFloat(a[1])
    )[0] || ["", "0%"];

  const cap = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

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
      <div style={s.container}>
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

        {/* MAIN */}
        <div style={s.main}>
          {/* LEFT */}
          <div style={s.left}>
            {["race", "age", "gender"].map((key) => (
              <div
                key={key}
                onClick={() => {
                  setActive(key);
                  setSelected(getTop(data[key])[0]);
                }}
                style={{
                  ...s.leftBox,
                  background: active === key ? "#111" : "#E8E8E8",
                  color: active === key ? "#fff" : "#000",
                }}
              >
                <div>{getTop(data[key])[0]}</div>
                <div style={s.leftLabel}>
                  {key === "gender" ? "SEX" : key.toUpperCase()}
                </div>
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
            ◀ BACK
          </div>

          <div style={s.note}>
            If A.I. estimate is wrong, select the correct one.
          </div>

          <div style={s.navGroup} onClick={() => router.push("/")}>
            HOME ▶
          </div>
        </div>
      </div>
    </div>
  );
}

/* CIRCLE */
function Circle({ value }) {
  const size = 380;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const center = size / 2;

  const percent = parseFloat(value || 0);
  const offset = c - (percent / 100) * c;

  return (
    <div style={{ position: "relative" }}>
      <svg width={size} height={size}>
        <circle cx={center} cy={center} r={r} stroke="#ccc" strokeWidth={stroke} fill="none" />
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="#111"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
        />
      </svg>

      <div style={s.percent}>{percent}%</div>
    </div>
  );
}

/* STYLES */
const s = {
  page: {
    background: "#FFF",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    maxWidth: "1400px", // 🔥 THIS FIXES LOCAL VS VERCEL
    padding: "24px 40px",
    fontFamily: "Helvetica, Arial",
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
    gridTemplateColumns: "220px 1fr 320px",
    gap: 30,
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  leftBox: {
    padding: 12,
    borderTop: "1px solid #999",
    cursor: "pointer",
  },

  leftLabel: {
    fontSize: 10,
    marginTop: 6,
  },

  center: {
    background: "#E8E8E8",
    borderTop: "2px solid #111",
    padding: "40px",
    minHeight: 520,

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },

  centerTitle: {
    fontSize: 32,
    alignSelf: "start",
    justifySelf: "start",
  },

  circleWrap: {
    alignSelf: "end",
    justifySelf: "end",
  },

  right: {
    background: "#E8E8E8",
    borderTop: "2px solid #111",
  },

  rightHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
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
    fontSize: 36,
  },

  bottom: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },

  navGroup: {
    cursor: "pointer",
    fontSize: 12,
  },

  note: {
    color: "#777",
    fontSize: 12,
  },
};