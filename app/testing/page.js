"use client" 
import { useEffect, useState } from "react";
export default function Home() {
const [title,setTitle] = useState("Introduce Yourself")
const [value,setValue] = useState('')
const [name,setName] = useState()
const [location, setLocation] = useState("");
const [none, setNone] = useState()
const [error,setError] = useState()
const [loading, setLoading] = useState(false);
const [loaded,setLoaded] = useState()

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
            <div className="center column" style={{
                position:"fixed",
                bottom:"55%",
                color:"grey",
                fontSize:"20px",
                 display: none,
                }} > click to type
                <div style={{color:"red",fontSize:"14px"}} >{error}</div>
                </div>
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                 onKeyDown={(e) => {
                    if (e.key !== "Enter" || !value.trim()) return;

                    const regex = /^[A-Za-z\s]+$/;

                    if (!regex.test(value)) {
                        setError('Please enter a valid name without numbers or special characters')
                        return;
                    }

                    if (!name) {
                        setName(value);
                        setValue("");
                        setTitle("your city name");
                    } 
                 
                    else {
                        setLocation(value);
                        setLoading(true)
                        localStorage.setItem(
                        "user",
                        JSON.stringify({ name, location: value })
                        );

                        fetch("https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            location: value,
                        }),
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            setTimeout(() => {
                            setLoaded(true)
                            setLoading(false)
                        }, 1500)
                        })
                        .catch(err => console.log(err));

                        setNone("none");
                    }
                    }}
                    placeholder= {title}
                    style={{
                    display: none,
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
            {loading && 
            <div className="center column" 
            style={{
                position:"fixed",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color:"grey",
                width:"360px",
                height:"100px",
            }}>
                <div style={{fontSize:'20px'}} >
                    Processing Submission
                </div>
                <div className="dots center">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>}
             {loaded && 
            <div className="center column"
            style={{
                position:"fixed",
                top: "48%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}> 
            <div style={{fontSize:"24px"}} >Thank you!</div>
            <br></br>
            <div style={{color:"gray"}}>Proceed for the next step</div>
            </div>}
        </div>
    </div>
  );
}
