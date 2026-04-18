"use client" 
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <div style={{height:"100vh",padding:"0",margin:"0px",overflow:"hidden"}} >
    <div className="center" style={{justifyContent:"space-between",margin:"8px 0px"}} >
      <div style={{margin:"15px", fontSize:'12px'}}>
        <span style={{fontWeight:"bold",fontSize:"10px",margin:"4px"}} >SKINSTRC</span> 
        <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div>
        <button 
        style={{
            backgroundColor:"black",
            color:'white',
            padding:"10px",
            marginTop:"15px",
            fontSize:"12px"}} >Enter Code</button></div>
    </div>
    <div style={{
        fontWeight:"bold",
        position:"relative",
        left:"22px",
        fontSize:"12px"}} >
            To START ANALYSIS
        </div>
    </div>
  );
}
