import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div
      className="duration-200 h-screen w-screen"
      style={{ backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-4 py-2">
          <button
            style={{ backgroundColor: "Red" }}
            className="text-white rounded-2xl px-4 py-2"
            onClick={()=> setColor("Red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "Green" }}
            className="text-white rounded-2xl px-4 py-2"
            onClick={()=> setColor("Green")}

          >
            Green
          </button>
          <button
            style={{ backgroundColor: "Yellow" }}
            className="text-black rounded-2xl px-4 py-2"
            onClick={()=> setColor("Yellow")}

          >
            Yellow
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
