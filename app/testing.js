"use client" 
import './globals.css';
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import { useEffect, useState } from "react";
export default function Home() {
const [hideLeft, setHideLeft] = useState(null);
const [hideRight, setHideRight] = useState(null);
const [mainLeft, setMainLeft] = useState('center');
const [mainRight, setMainRight] = useState('center')
const [loaded, setLoaded] = useState(false)
const [moveCenter, setMoveCenter] = useState('');

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
    <div style={{height:"100vh",padding:"0",margin:"0px",overflow:"hidden"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
      
    </div>
  );
}
