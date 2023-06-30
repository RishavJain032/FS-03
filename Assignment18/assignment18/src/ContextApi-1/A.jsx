import { useState } from "react";
import B from "./B";
import mySecondContext from "../ContextApi-2/Context";

function A(props) {
  const [state, setState] = useState("");
  const [data, setData] = useState("");
  return (
    <div style = {{marginLeft : "30px"}}>
      <h1 style={{color : "red"}}>Send Data to Child</h1>
      <h2>A Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value)}}/>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => {setData(state)}}>Send Data
      </button>

      <mySecondContext.Provider value={{ data }}>
        <B />
      </mySecondContext.Provider>
    </div>
  );
}

export default A;