import {useState } from "react";

export default function App() {

    const [height, setHeight] = useState()

    window.addEventListener("resize", ()=>setHeight(window.innerHeight))
    console.log(height)
  return (
    <div className="flex max-w-3xl m-auto" style={{height: height, minHeight: "450px"}}>
      <div className="my-5 shadow-2xl rounded flex-col w-full border-2 border-slate-100 p-3 flex" style={{ borderRadius: "30px" }}>
        <div className="bg-red-500 w-full h-64"></div>
        <div className="h-full w-full bg-black"></div>
        <h1 className="text-center">Designed with love by Ondřej Hájek 💘</h1>
      </div>
    </div>
  );
}
