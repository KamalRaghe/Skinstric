
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";



export default function Home() {
  return (
    <div style={{height:"100vh",padding:"0",margin:"0px"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
      <div className="center heading" style={{justifyContent:"space-between",height:"75vh"}}>
        <button className="center" >
          <div className="center" 
          style={{transform:"rotate(45deg)",border:"1px dashed grey",
                  width:"300px",height:"300px",position:"relative",right:"175px"}}>
            <div style={{display:"inline-block",border:"1px solid black",
                        margin:"15px", position:"relative",left:"40px",bottom:"40px"}} >
              <div className="center" 
              style={{scale:"2",transform:"rotate(-45deg)",width:"44px",height:"45px",position:"relative",right:"2px"}}>
                <GoTriangleLeft></GoTriangleLeft>
              </div>
            </div>
          </div>
          <span style={{position:"relative",right:"225px"}} >Discover A.I.</span>
        </button>
        <div className="center column">
          <div>Sophisticated</div>
          <div>Skincare</div>
        </div>
        <button className="center" > 
          Take test
           <div className="center" 
          style={{transform:"rotate(45deg)",border:"1px dashed grey",
                  width:"300px",height:"300px",position:"relative",right:"175px"}}>
            <div style={{display:"inline-block",border:"1px solid black",
                        margin:"15px", position:"relative",left:"40px",bottom:"40px"}} >
              <div className="center" 
              style={{scale:"2",transform:"rotate(-45deg)",width:"44px",height:"45px",position:"relative",right:"2px"}}>
                <GoTriangleLeft></GoTriangleLeft>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="center" style={{justifyContent:"start", width:"316px",height:"72px",margin:"15px"}} >
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
      </div>
    </div>
  );
}
