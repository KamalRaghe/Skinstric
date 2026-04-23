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

  const cap = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  const getTop = (obj) =>
    Object.entries(obj || {}).sort(
      (a, b) => parseFloat(b[1]) - parseFloat(a[1])
    )[0] || ["", "0%"];

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
    <div>
      <div>
        {/* TOP */}
        <div>
          <div>
            <b>SKINSTRIC</b>
            <span style={{ color: "#888" }}> [ INTRO ]</span>
          </div>
          <div>ENTER CODE</div>
        </div>

        <div>A.I. ANALYSIS</div>
        <div>DEMOGRAPHICS</div>
        <div>PREDICTED RACE & AGE</div>

        {/* MAIN */}
        <div>
          {/* LEFT */}
          <div>
            {["race", "age", "gender"].map((key) => (
              <div
                key={key}
                onClick={() => {
                  setActive(key);
                  setSelected(getTop(data[key])[0]);
                }}
                style={{
                  background: active === key ? "#111" : "#E5E5E5",
                  color: active === key ? "#fff" : "#000",
                }}
              >
                <div>{cap(getTop(data[key])[0])}</div>
                <div>
                  {key === "gender" ? "SEX" : key.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div>
            <div>
              {active === "age" ? `${selected} y.o.` : cap(selected)}
            </div>

            <div>
              <Circle value={current[selected]} />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div>
              <span>{active.toUpperCase()}</span>
              <span>A.I. CONFIDENCE</span>
            </div>

            {sorted.map(([k, v]) => (
              <div
                key={k}
                onClick={() => setSelected(k)}
                style={{
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
        <div>
          <div onClick={() => router.push("/select")}>
            ◀ BACK
          </div>

          <div>
            If A.I. estimate is wrong, select the correct one.
          </div>

          <div onClick={() => router.push("/")}>
            HOME ▶
          </div>
        </div>
      </div>
    </div>
  );
}

/* CIRCLE */
function Circle({ value }) {
  const size = 250;
  const stroke = 8;
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

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 26,
        }}
      >
        {percent}%
      </div>
    </div>
  );
}

/* STYLES */


 