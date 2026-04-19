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

  // 🔢 FORMAT ALL NUMBERS → %
  const formatData = (obj) => {
    if (typeof obj === "number") {
      return (obj * 100).toFixed(2) + "%";
    }

    if (Array.isArray(obj)) {
      return obj.map(formatData);
    }

    if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (let key in obj) {
        newObj[key] = formatData(obj[key]);
      }
      return newObj;
    }

    return obj;
  };

  // 📊 SORT OBJECT DESC (highest first)
  const sortObjectDesc = (obj) => {
    if (!obj) return null;

    return Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  };

  if (!data) return <div>No result found</div>;

  // 🔍 SORTED DATA
  const sortedRace = sortObjectDesc(data?.race);
  const sortedGender = sortObjectDesc(data?.gender);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Result</h1>

      {/* 👤 GENDER */}
      {sortedGender && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Gender</h2>
          {Object.entries(sortedGender).map(([key, value]) => (
            <div key={key}>
              {key}: {(value * 100).toFixed(2)}%
            </div>
          ))}
        </div>
      )}

      {/* 🌍 RACE */}
      {sortedRace && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Race</h2>
          {Object.entries(sortedRace).map(([key, value]) => (
            <div key={key}>
              {key}: {(value * 100).toFixed(2)}%
            </div>
          ))}
        </div>
      )}

      {/* 🧾 FULL DATA (DEBUG VIEW) */}
      <pre>
        {JSON.stringify(formatData(data), null, 2)}
      </pre>
    </div>
  );
}