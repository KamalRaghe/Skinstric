"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [active, setActive] = useState("race");
  const [selected, setSelected] = useState(null);

  const getTop = (obj) =>
    Object.entries(obj).sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))[0];

  useEffect(() => {
    const temp = {
      race: {
        "Latino hispanic": "67%",
        "East asian": "22%",
        "Middle eastern": "4%",
        "South asian": "2%",
        "White": "1%",
        "Black": "0%",
        "Southeast asian": "0%",
      },
      age: {
        "0-2": "0%",
        "3-9": "64%",
        "10-19": "10%",
        "20-29": "15%",
        "30-39": "0%",
        "40-49": "0%",
        "50-59": "0%",
        "60-69": "6%",
        "70+": "1%",
      },
      gender: {
        MALE: "86%",
        FEMALE: "14%",
      },
    };

    setData(temp);
    setSelected(getTop(temp.race)[0]);
  }, []);

  if (!data) return null;

  const current = data[active];

  return (
    <div style={styles.page}>
      {/* TOP */}
      <div style={styles.top}>
        <div>
          <b>SKINSTRIC</b>
          <span style={{ color: "#777" }}> [ INTRO ]</span>
        </div>

        <button style={styles.enter}>ENTER CODE</button>
      </div>

      <div style={styles.header}>A.I. ANALYSIS</div>
      <div style={styles.title}>DEMOGRAPHICS</div>
      <div style={styles.sub}>PREDICTED RACE & AGE</div>

      <div style={styles.main}>
        {/* LEFT */}
        <div>
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
                ...styles.leftCard,
                background: active === item.key ? "#111" : "#e6e6e6",
                color: active === item.key ? "#fff" : "#000",
              }}
            >
              <div style={styles.leftValue}>
                {getTop(data[item.key])[0]}
              </div>
              <div style={styles.leftLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={styles.centerBox}>
          <div style={styles.centerTitle}>
            {active === "age" ? `${selected} y.o.` : selected}
          </div>

          <Circle value={current[selected]} />
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.rightHead}>
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
                <span style={styles.rowLeft}>◇ {k}</span>
                <span>{v}</span>
              </div>
            ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        {/* BACK */}
        <div style={styles.navGroup} onClick={() => router.back()}>
          <div style={styles.diamond}>
            <span style={styles.arrow}>◀</span>
          </div>
          <span style={styles.navText}>BACK</span>
        </div>

        {/* CENTER TEXT */}
        <div style={styles.note}>
          If A.I. estimate is wrong, select the correct one.
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          

          <div style={styles.navGroup} onClick={() => router.push("/")}>
            <span style={styles.navText}>HOME</span>
            <div style={styles.diamond}>
              <span style={styles.arrow}>▶</span>
            </div>
          </div>
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
    <div style={{ position: "relative" }}>
      <svg width={size} height={size}>
        <circle cx="130" cy="130" r={r} stroke="#d0d0d0" strokeWidth={stroke} fill="none" />
        <circle
          cx="130"
          cy="130"
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

      <div style={styles.percent}>{percent}%</div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    fontFamily: "Helvetica, Arial",
    background: "#f2f2f2",
    padding: "30px 50px",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 40,
    fontSize: 12,
  },

  enter: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    fontSize: 10,
  },

  header: { fontSize: 12, letterSpacing: 2 },
  title: { fontSize: 74, marginBottom: 10 },
  sub: { fontSize: 12, marginBottom: 50 },

  main: {
    display: "grid",
    gridTemplateColumns: "220px 1fr 320px",
    gap: 35,
  },

  leftCard: {
    padding: "22px 18px",
    marginBottom: 10,
    minHeight: 85,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  },

  leftValue: {
    fontSize: 14,
    marginBottom: 6,
  },

  leftLabel: {
    fontSize: 11,
    letterSpacing: 1,
  },

  centerBox: {
    background: "#e9e9e9",
    padding: "40px",
    borderTop: "2px solid #aaa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  centerTitle: {
    fontSize: 30,
  },

  right: {
    background: "#e9e9e9",
    padding: 20,
    borderTop: "2px solid #aaa",
  },

  rightHead: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 11,
    marginBottom: 10,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 8px",
    fontSize: 12,
    cursor: "pointer",
  },

  rowLeft: {
    display: "flex",
    gap: 6,
  },

  percent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 30,
  },

  bottom: {
    marginTop: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
  },

  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },

  diamond: {
    width: 36,
    margin: 8,
    height: 36,
    border: "1px solid #000",
    transform: "rotate(45deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    transform: "rotate(-45deg)",
    fontSize: 12,
  },

  navText: {
    fontSize: 12,
    letterSpacing: 1,
  },

  note: {
    color: "#777",
  },
};