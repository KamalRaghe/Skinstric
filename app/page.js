"use client" 
import './globals.css';
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
export default function Home() {
const [hideLeft, setHideLeft] = useState(null);
const [hideRight, setHideRight] = useState(null);
const [mainLeft, setMainLeft] = useState('center');
const [mainRight, setMainRight] = useState('center')
const [loaded, setLoaded] = useState(false)
const [moveCenter, setMoveCenter] = useState('');
const router = useRouter()

useEffect(()=>{
 if(!loaded){
  const timer = setTimeout(() => {
    setHideRight(false);
    setHideLeft(false);
  }, 600);
  setTimeout(() => {
    setMainLeft('center')
    setMainRight('center')
  },2000)
   return () => clearTimeout(timer);
 } 
})

  return (
    <div style={{height:"100vh",padding:"0",margin:"0px",overflow:"hidden",overflowY:"hidden"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
      <div className="center" style={{justifyContent:"space-between",height:"75vh"}}>
        <button className= {mainLeft} style={{opacity: hideLeft ? 0 : 1,
                transition: "opacity 1s ease",}}>
          <div className="center"
            onMouseEnter={() => {
              setLoaded(true)
              setMoveCenter('moveRight');
              setTimeout(() => {
                setHideRight(true);
              }, 600);
            }}  
            onMouseLeave={() => {
              setLoaded(false);
              setMoveCenter('')
              }}
          style={{transform:"rotate(45deg)",border:"1px dashed grey",
                 width:"300px",height:"300px",position:"relative",right:"175px"}}>
            <div className='border' style={{display:"inline-block",border:"1px solid black",
                        margin:"15px", position:"relative",left:"40px",bottom:"40px"}} >
              <div className="center" 
              style={{scale:"2",transform:"rotate(-45deg)",width:"44px",height:"45px",position:"relative",right:"2px"}}>
                <GoTriangleLeft></GoTriangleLeft>
              </div>
            </div>
          </div>
          <span style={{position:"relative",right:"230px"}} >Discover A.I.</span>
        </button>
       <div
          className="heading center column"
          style={{
            scale: '1.4',
            position: "relative",
            width: "300px",
            transition: "all 1.8s ease",
            zIndex:"30"
          }}
        >
          <div
            className="topText"
            style={{
              transition: "all 1.8s ease",
              transform:
                moveCenter === "moveLeft"
                  ? "translateX(-18vw)"
                  : moveCenter === "moveRight"
                  ? "translateX(17vw)"
                  : "translateX(0)",
              textAlign:
                moveCenter === "moveLeft"
                  ? "left"
                  : moveCenter === "moveRight"
                  ? "right"
                  : "center"
            }}
          >
            Sophisticated
          </div>

          <div
            className="bottomText"
            style={{
              transition: "all 1.8s ease",
              transform:
                moveCenter === "moveLeft"
                  ? "translateX(-24.5vw)"   
                  : moveCenter === "moveRight"
                  ? "translateX(23.5vw)" 
                  : "translateX(0)",
              textAlign:
                moveCenter === "moveLeft"
                  ? "left"
                  : moveCenter === "moveRight"
                  ? "right"
                  : "center"
            }}
          >
            Skincare
          </div>
        </div>
          <button className="center FadeAway" style={{opacity: hideRight ? 0 : 1,
                transition: "opacity 1s ease",}}> 
          <span style={{position:"relative",left:"215px",zIndex:"20"}} >Take test</span>
           <div className= {mainRight}
           onClick={()=>{router.push('/testing')}}
           onMouseEnter={() => {
              setLoaded(true)
              setMoveCenter('moveLeft');
              setTimeout(() => {
                setHideLeft(true);
              }, 600);
            }} onMouseLeave={() => {
              setLoaded(false);
              setMoveCenter('')
              }}
          style={{transform:"rotate(45deg)",border:"1px dashed grey",
                 width:"300px",height:"300px",position:"relative",left:"180px"}}>
            <div style={{display:"inline-block",scale:"2",
                        padding:"1px", position:"relative", right:"50px",top:"50px"}} >
              <div className="center" 
              style={{transform:"rotate(-45deg)",scale:"0.79"}}>
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
