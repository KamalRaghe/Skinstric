import { MdOutlineCamera } from "react-icons/md";
export default function Cam(){
    return(
        <div>
            <div className="center" style={{height:"95vh"}} >
                <div style={{ width: "450px", height: "450px", border: "1px dashed grey", position: "relative" }}>
                    <div className="center"  style={{ width: "100%", height: "100%", position: "relative",overflow:"scroll" }}>
            
                    <div style={{
                         width: "70%",
                         height: "70%",
                         border: "2px dashed grey",
                         position: "absolute",
                         animation: "rotate 50s linear infinite",
                         opacity: "0.3"
                    }}/>
            
                    <MdOutlineCamera style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        border: "1px solid black",
                        background: "white",
                        scale: "2.8"
                    }}
                    />
                    </div>
                </div>
                 </div>
        </div>
    )
}