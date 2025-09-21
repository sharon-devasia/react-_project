import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div
      className="w-full  h-screen duration-200 "
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0">
        <div className="flex flex-wrap justify-center px-2 py-3 gap-3 shadow-lg bg-white  rounded-2xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-5xl"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-5xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-5xl"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black");
            }}
          >
            black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-5xl"
            style={{ backgroundColor: "violet" }}
            onClick={() => {
              setColor("violet");
            }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
