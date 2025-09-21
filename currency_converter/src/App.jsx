import { useState, useEffect } from "react";
import { InputBox } from "./components";

import "./App.css";

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to ,setTo]=useState("inr")
  
  const [convertedAmount,setConvertedAmount]=useState(0);

  return (
    <>
      <h1 className="bg-orange-500 text-3xl"></h1>
    </>
  );
}

export default App;
