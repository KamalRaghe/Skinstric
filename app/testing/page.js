"use client" 
import { useEffect, useState } from "react";
export default function Home() {
const [title,setTitle] = useState("Introduce Yourself")
const [value,setValue] = useState('')
const [name,setName] = useState()
const [none, setNone] = useState()
  return (
    <div style={{height:"100vh",padding:"0",margin:"0px",overflow:"hidden"}} >
    <div className="center" style={{justifyContent:"space-between"}} >
      <div style={{margin:"15px"}}>SKINSTRC <span style={{color:"grey"}} >[ INTRO ]</span></div>
      <div><button style={{backgroundColor:"black",color:'white',padding:"10px",marginTop:"15px",fontSize:"12px"}} >Enter Code</button></div>
    </div>
    <div style={{fontWeight:"bold",position:"relative",left:"20px"}} >To START ANALYSIS</div>
      <div className="center" style={{width:"100%", height:"70vh"}}>
        <div className="box outer center">
            <div className="box middle center">
            <div className="box inner center"></div>
            </div>
            </div>
        </div>
        <div className="center" >
            <div className="center" style={{
                position:"fixed",
                bottom:"55%",
                color:"grey",
                fontSize:"20px"
                }} > click to type</div>
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter" && value && !name){
                    setName(value)    
                    setValue()
                    setTitle('your city name');
                    }else{
                        if(e.key === 'Enter' && value){
                            setTitle('')
                            setNone('none')
                        }
                    }
                }}
                    placeholder= {title}
                    style={{
                    textAlign: "center",
                    border: "none",
                    borderBottom: "2px solid grey",
                    fontSize: "40px",
                    width: "350px",
                    position:"fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    outline:"none"
                }}
                />
        </div>
    </div>
  );
}
