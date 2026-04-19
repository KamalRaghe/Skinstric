"use client";

export default function Page() {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <div className="header-left">
          <span className="logo">SKINSTRIC</span>
          <span className="intro">[ INTRO ]</span>
        </div>
        <button className="code-btn">ENTER CODE</button>
      </div>

      <div className="main">

        {/* LEFT */}
        <div className="left">
          <h1>A.I. ANALYSIS</h1>
          <p>A.I. HAS ESTIMATED THE FOLLOWING.</p>
          <p>FIX ESTIMATED INFORMATION IF NEEDED.</p>
        </div>

        {/* DIAMONDS */}
        <div className="diamond-area">

          <div className="diamond top">
            <span>DEMOGRAPHICS</span>
          </div>

          <div className="diamond right">
            <span>SKIN TYPE DETAILS</span>
          </div>

          <div className="diamond bottom">
            <span>WEATHER</span>
          </div>

          <div className="diamond left-d">
            <span>COSMETIC CONCERNS</span>
          </div>

        </div>
      </div>
    </div>
  );
}