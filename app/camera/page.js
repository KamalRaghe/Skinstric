import { MdOutlineCamera } from "react-icons/md";
export default function Cam(){
    
    return(
        <div>
            <div className="center" style={{height:"95vh"}} >
                <div style={{ width: "450px", height: "450px", border: "1px dashed grey",position: "relative" }}>
                    <div className="center"  style={{ width: "100%", height: "100%",overflow:"scroll" }}>                               
                        <div className="loadingBox center" style={{width:"350px",height:"350px",margin:"100px"}} >
                        <div className="loadingBox center" style={{width:"300px",height:"300px"}}></div>
                    </div>
            
                    <MdOutlineCamera style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        border: "1px solid black",
                        background: "white",
                        scale: "2.8",
                        position:"absolute",
                        top:"58%",
                        left:"58%",
                        transform:"translate(-50%,-50%)"
                    }}
                    />
                    </div>
                </div>
                 </div>
        </div>
    )
}