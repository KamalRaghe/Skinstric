"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("result");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const toNumber = (val) => {
    if (typeof val === "string") {
      return parseFloat(val.replace("%", ""));
    }
    return val;
  };

  const sortObjectDesc = (obj) => {
    if (!obj) return null;

    return Object.entries(obj)
      .sort((a, b) => toNumber(b[1]) - toNumber(a[1]))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  };

  const ageOrder = [
    "0-2","3-9","10-19","20-29","30-39",
    "40-49","50-59","60-69","70+",
  ];

  const sortAge = (obj) => {
    if (!obj) return null;

    const ordered = {};
    ageOrder.forEach((range) => {
      if (obj[range] !== undefined) {
        ordered[range] = obj[range];
      }
    });
    return ordered;
  };

  if (!data) return <div>No result found</div>;

  const result = data.data;

  const sortedRace = sortObjectDesc(result?.race);
  const sortedGender = sortObjectDesc(result?.gender);
  const sortedAge = sortAge(result?.age);

  const topRace = sortedRace ? Object.entries(sortedRace)[0] : null;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "2px" }}>
          A.I. ANALYSIS
        </div>
        <h1 style={{ fontSize: "60px", margin: 0 }}>
          DEMOGRAPHICS
        </h1>
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        
        {/* LEFT PANEL */}
        <div style={{ width: "200px" }}>
          {topRace && (
            <div style={cardStyleDark}>
              {topRace[0]} <br /> RACE
            </div>
          )}

          {sortedAge && (
            <div style={cardStyle}>
              {Object.entries(sortedAge)[4]?.[0]} <br /> AGE
            </div>
          )}

          {sortedGender && (
            <div style={cardStyle}>
              {Object.entries(sortedGender)[0]?.[0]} <br /> SEX
            </div>
          )}
        </div>

        {/* CENTER (CIRCLE) */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {topRace && (
            <div style={circleWrap}>
              <div style={circle}>
                {topRace[1]}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div style={{ width: "250px" }}>
          <h3>RACE</h3>
          {sortedRace &&
            Object.entries(sortedRace).map(([key, value]) => (
              <div key={key} style={listItem}>
                <span>{key}</span>
                <span>{value}</span>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

/* 🎨 STYLES */

const cardStyleDark = {
  background: "#111",
  color: "#fff",
  padding: "20px",
  marginBottom: "10px",
  fontWeight: "bold",
};

const cardStyle = {
  background: "#eee",
  padding: "20px",
  marginBottom: "10px",
};

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #ddd",
};

const circleWrap = {
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  border: "8px solid #ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const circle = {
  fontSize: "40px",
  fontWeight: "bold",
};