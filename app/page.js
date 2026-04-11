import Image from "next/image";

export default function Home() {
  return (
    <div style={{height:"100vh",padding:"0",margin:"0px"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
      <div className="center heading" style={{justifyContent:"space-between",height:"75vh"}}>
        <button>
          Discover A.I.
        </button>
        <div>
          <div>Sophisticated</div>
          <div>Skincare</div>
        </div>
        <button>Take test</button>
      </div>
      <div className="center" style={{justifyContent:"start", width:"316px",height:"72px",margin:"15px"}} >
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
      </div>
    </div>
  );
}
