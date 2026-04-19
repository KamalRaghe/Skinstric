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

  // ➕ FORMAT FUNCTION
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

  if (!data) return <div>No result found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Result</h1>

      <pre>
        {JSON.stringify(formatData(data), null, 2)}
      </pre>
    </div>
  );
}