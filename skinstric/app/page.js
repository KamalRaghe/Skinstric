"use client" 
import './globals.css';
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import { useEffect, useState } from "react";
export default function Home() {
const [hideLeft, setHideLeft] = useState(null);
const [hideRight, setHideRight] = useState(null);
const [loaded, setLoaded] = useState(false)

useEffect(()=>{
 if(!loaded){
  setTimeout(() => {
    setHideRight(false)
    setHideLeft(false);
  }, 1000);
 } 
})

  return (
    <div style={{height:"100vh",padding:"0",margin:"0px"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
      <div className="center" style={{justifyContent:"space-between",height:"75vh"}}>
        <button className="center">
          <div className= 'center' 
            onMouseEnter={() => {
              setLoaded(true)
              setTimeout(() => {
                setHideRight(true);
              }, 1000);
            }} onMouseLeave={() => {
                setTimeout(() => {
                setHideRight(false);
              }, 1000);
                setLoaded(false)
              }}
          style={{transform:"rotate(45deg)",border:"1px dashed grey",opacity: hideLeft ? 0 : 1,
                transition: "opacity 1s ease",display: hideLeft ? "none" : "flex",
                 width:"300px",height:"300px",position:"relative",right:"175px"}}>
            <div style={{display:"inline-block",border:"1px solid black",
                        margin:"15px", position:"relative",left:"40px",bottom:"40px"}} >
              <div className="center" 
              style={{scale:"2",transform:"rotate(-45deg)",width:"44px",height:"45px",position:"relative",right:"2px"}}>
                <GoTriangleLeft></GoTriangleLeft>
              </div>
            </div>
          </div>
          <span style={{position:"relative",right:"230px"}} >Discover A.I.</span>
        </button>
        <div className= 'center column heading ' style={{margin:"0",scale:"1.4"}}>
          <div>Sophisticated</div>
          <div>Skincare</div>
        </div>
        <button className="center"> 
          <span style={{position:"relative",left:"215px"}} >Take test</span>
           <div className='center'
            onMouseEnter={() => {
              setLoaded(true)
              setTimeout(() => {
                setHideLeft(true);
              }, 1000);
            }} onMouseLeave={() => {
              setLoaded(false);
              setTimeout(() => {
                setHideLeft(false);
              }, 1000)
              }}
          style={{transform:"rotate(45deg)",border:"1px dashed grey",opacity: hideRight ? 0 : 1,
                transition: "opacity 1s ease",display: hideRight ? "none" : "flex",
                 width:"300px",height:"300px",position:"relative",left:"180px"}}>
            <div style={{display:"inline-block",border:"1px solid black",
                        margin:"15px", position:"relative", right:"50px",top:"50px"}} >
              <div className="center" 
              style={{scale:"2",transform:"rotate(-45deg)",width:"44px",height:"45px",position:"relative",left:"2px"}}>
                <GoTriangleRight></GoTriangleRight>
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
