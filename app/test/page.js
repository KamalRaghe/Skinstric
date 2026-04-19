"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("race");

  useEffect(() => {
    const stored = localStorage.getItem("result");
    if (stored) setData(JSON.parse(stored));
  }, []);

  const toNumber = (val) => {
    if (typeof val === "string") {
      return parseFloat(val.replace("%", ""));
    }
    return val;
  };

  const formatPercent = (val) => {
    return toNumber(val).toFixed(2) + "%";
  };

  const sortObjectDesc = (obj) => {
    if (!obj) return null;
    return Object.entries(obj)
      .sort((a, b) => toNumber(b[1]) - toNumber(a[1]))
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  };

  const ageOrder = [
    "0-2","3-9","10-19","20-29","30-39",
    "40-49","50-59","60-69","70+",
  ];

  const sortAge = (obj) => {
    if (!obj) return null;
    const ordered = {};
    ageOrder.forEach((k) => {
      if (obj[k] !== undefined) ordered[k] = obj[k];
    });
    return ordered;
  };

  if (!data) return <div style={{ padding: 40 }}>No result</div>;

  const result = data.data;

  const race = sortObjectDesc(result?.race);
  const gender = sortObjectDesc(result?.gender);
  const age = sortAge(result?.age);

  const currentData =
    activeTab === "race"
      ? race
      : activeTab === "age"
      ? age
      : gender;

  const topItem = currentData
    ? Object.entries(currentData).sort((a, b) => toNumber(b[1]) - toNumber(a[1]))[0]
    : null;

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      
      <h1 style={{ fontSize: 60 }}>DEMOGRAPHICS</h1>

      <div style={{ display: "flex", gap: 40 }}>

        {/* LEFT MENU */}
        <div style={{ width: 200 }}>
          <div onClick={() => setActiveTab("race")} style={activeTab==="race"?cardDark:card}>
            {race && Object.keys(race)[0]} <br /> RACE
          </div>

          <div onClick={() => setActiveTab("age")} style={activeTab==="age"?cardDark:card}>
            {age && Object.keys(age)[4]} <br /> AGE
          </div>

          <div onClick={() => setActiveTab("gender")} style={activeTab==="gender"?cardDark:card}>
            {gender && Object.keys(gender)[0]} <br /> SEX
          </div>
        </div>

        {/* CENTER */}
        <div style={center}>
          {topItem && (
            <div>
              <div style={bigLabel}>{topItem[0]}</div>
              <StaticCircle value={topItem[1]} />
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div style={{ width: 260 }}>
          <h3 style={{ textTransform: "uppercase" }}>
            {activeTab === "gender" ? "SEX" : activeTab}
          </h3>

          {currentData &&
            Object.entries(currentData).map(([key, value]) => (
              <div
                key={key}
                style={{
                  ...listItem,
                  background: key === topItem?.[0] ? "#111" : "transparent",
                  color: key === topItem?.[0] ? "#fff" : "#000",
                }}
              >
                <span>{key}</span>
                <span>{formatPercent(value)}</span>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

/* 🎯 STATIC CIRCLE (NUMBER ONLY CHANGES) */
function StaticCircle({ value }) {
  const percent = parseFloat(
    typeof value === "string" ? value.replace("%", "") : value
  );

  return (
    <div style={wrap}>
      {/* grey ring */}
      <div style={greyCircle} />

      {/* black arc style (fixed look) */}
      <div style={blackArc} />

      {/* number */}
      <div style={text}>
        {percent.toFixed(2)}%
      </div>
    </div>
  );
}

/* STYLES */
const cardDark = {
  background: "#111",
  color: "#fff",
  padding: 20,
  marginBottom: 10,
  cursor: "pointer",
};

const card = {
  background: "#eee",
  padding: 20,
  marginBottom: 10,
  cursor: "pointer",
};

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const center = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const bigLabel = {
  fontSize: 48,
  marginBottom: 20,
};

const wrap = {
  position: "relative",
  width: 260,
  height: 260,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const greyCircle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  border: "10px solid #ddd",
};

const blackArc = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  border: "10px solid #111",
  borderLeftColor: "#ddd",
  borderBottomColor: "#ddd",
};

const text = {
  fontSize: 42,
  fontWeight: "bold",
  zIndex: 2,
};