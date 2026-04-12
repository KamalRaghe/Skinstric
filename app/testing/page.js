"use client" 
import { useEffect, useState } from "react";
export default function Home() {

  return (
    <div style={{height:"100vh",padding:"0",margin:"0px",overflow:"hidden"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
    <div style={{fontWeight:"bold",position:"relative",left:"20px"}} >To START ANALYSIS</div>
      <div className="center" style={{width:"100%",height:"70vh",transform:"rotate(45deg)"}} >
        <div className="center" style={{width:"370px",height:"370px", border:"2px dashed rgba(128,128,128,0.3)"}} >
            <div className="center" style={{width:"340px",height:"340px",border:"2px dashed rgba(128,128,128,0.6)"}} >
                <div className="center" style={{width:"300px",height:"300px"}}>
                    <input placeholder="Introduce Yourself" 
                    className="center"
                    style={{
                        padding:"0px",
                        textAlign:"center",
                        transform:"rotate(-45deg)",
                        border:'none',
                        borderBottom:"2px solid grey",
                        color: 'black',
                        fontSize:"40px",
                        width:"350px"
                    }} ></input>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
