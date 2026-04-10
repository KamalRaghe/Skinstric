import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="center" style={{height:"5vh",justifyContent:"space-between"}} ></div>
      <div className="center heading" style={{height:"90vh",justifyContent:"space-between"}}>
        <button>Discover A.I.</button>
        <div>
          <div>Sophisticated</div>
          <div>Skincare</div>
        </div>
        <button>Take test</button>
      </div>
      <div className="center" style={{height:"5vh",justifyContent:"space-between"}} ></div>
    </>
  );
}
