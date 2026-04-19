export default function select(){
    return(
        <div>
           <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                fontSize: "10px",
                background: "white"
                }}>
                <div>
                <span style={{ fontWeight: "bold" }}>SKINSTRIC</span>
                <span style={{ color: "grey", marginLeft: "10px" }}>[ INTRO ]</span>
                </div>

                <button style={{
                background: "black",
                color: "white",
                padding: "10px",
                fontSize: "9px",
                fontWeight: "bold",
                border: "none"
                }}>
                ENTER CODE
                </button>
            </div>
            <div style={{
                fontWeight:"bold",
                width:"150px",
                margin:"0 20px",
                paddingRight:"30px"
                }} >
                    A.I. ANALYSIS
            </div>    
            <div style={{
                width:"450px",
                margin:"5px 20px",
                paddingRight:"30px"
                }} >
                    A.I. has estimated the following.
            </div>    
        </div>
    )
}