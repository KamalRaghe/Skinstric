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

  // 🔥 CONVERT "53.12%" → 53.12
  const toNumber = (val) => {
    if (typeof val === "string") {
      return parseFloat(val.replace("%", ""));
    }
    return val;
  };

  // 📊 SORT OBJECT DESC (WORKS WITH % STRINGS)
  const sortObjectDesc = (obj) => {
    if (!obj || typeof obj !== "object") return null;

    return Object.entries(obj)
      .sort((a, b) => toNumber(b[1]) - toNumber(a[1]))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  };

  if (!data) return <div>No result found</div>;

  // 🔍 YOUR DATA IS INSIDE data.data
  const result = data.data;

  const sortedRace = sortObjectDesc(result?.race);
  const sortedGender = sortObjectDesc(result?.gender);
  const sortedAge = sortObjectDesc(result?.age);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Result</h1>

      {/* 👤 GENDER */}
      {sortedGender && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Gender</h2>
          {Object.entries(sortedGender).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </div>
      )}

      {/* 🌍 RACE (NOW CORRECTLY SORTED) */}
      {sortedRace && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Race</h2>
          {Object.entries(sortedRace).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </div>
      )}

      {/* 🎂 AGE */}
      {sortedAge && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Age</h2>
          {Object.entries(sortedAge).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </div>
      )}

      {/* 🧾 FULL RAW */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}