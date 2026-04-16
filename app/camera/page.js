import { MdOutlineCamera } from "react-icons/md";
export default function Cam(){
    return(
        <div>
            <div className="center" style={{height:"95vh",overflowY:"hidden"}} >
                <div style={{ width: "450px", height: "450px", border: "1px dashed grey", position: "relative" }}>
                    <div className="center"  style={{ width: "100%", height: "100%", position: "relative",overflow:"scroll" }}>
            
                    <div style={{
                         width: "80%",
                         height: "80%",
                         border: "2px dashed grey",
                         position: "absolute",
                         animation: "rotate 50s linear infinite",
                         opacity: "0.3"
                    }}/>
            
                    <MdOutlineCamera style={{
                        position: "absolute",
                        top: "65%",
                        left: "65%",
                        transform: "translate(-50%, -50%)",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        border: "1px solid black",
                        background: "white",
                        scale: "2.8"
                    }}
                    />
            
                    {/* ✅ TOP RIGHT CONNECTOR */}
                     <div style={{
                         position: "absolute",
                         top: "65%",
                         left: "65%",
                         transform: "translate(-50%, -50%)"
                    }}>
                        {/* line */}
                        <div style={{
                        position: "absolute",
                        width: "95px",
                        height: "2px",
                        background: "#6f6f6f",
                        transform: "rotate(-41deg)",
                        transformOrigin: "0% 50%",
                        left: "5px",   // starts at circle edge
                        top: "-85px"
                        }}/>
                         <div style={{
                         position: 'relative',
                         top:"-150px",
                         left:"75px",
                         width: "4px",
                         height: "4px",
                         border: "1px solid black",
                         borderRadius: "50%",
                        }}/>
                        {/* text */}
                        <div style={{
                         position: "absolute",
                         width:"150px",
                         left: "85px",
                         top: "-162px",
                         fontSize: "13px",
                         color: "#444",
                         lineHeight: "1.3",
                         letterSpacing: "0.3px"
                         }}>
                         ALLOW A.I.<br/>
                        TO SCAN YOUR FACE
                        </div>
                    </div>
            
                    </div>
                </div>
                 </div>
        </div>
    )
}