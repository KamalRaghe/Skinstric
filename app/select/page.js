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

      {/* MAIN */}
      <div className="main">
        
        {/* LEFT TEXT */}
        <div className="left">
          <h1>A.I. ANALYSIS</h1>

          <p>A.I. HAS ESTIMATED THE FOLLOWING.</p>
          <p>FIX ESTIMATED INFORMATION IF NEEDED.</p>
        </div>

        {/* DIAMOND */}
        <div className="diamond-wrapper">
          <div className="diamond">
            
            {/* GRID */}
            <div className="grid">
              <div className="box">
                <span>DEMOGRAPHICS</span>
              </div>

              <div className="box">
                <span>SKIN TYPE DETAILS</span>
              </div>

              <div className="box">
                <span>COSMETIC CONCERNS</span>
              </div>

              <div className="box">
                <span>WEATHER</span>
              </div>
            </div>

            {/* CROSS LINES */}
            <div className="line horizontal"></div>
            <div className="line vertical"></div>

          </div>
        </div>

      </div>
    </div>
  );
}