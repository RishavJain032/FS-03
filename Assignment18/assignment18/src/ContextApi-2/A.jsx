import { useState } from "react";
import B from "./B";
import mySecondContext from "./Context";

const A =() =>{
  const [state, setState] = useState("");
  return (
    <div>
      <h1 style={{color : "red"}}>Send Data to Parent</h1>
      <h2>A Component</h2>
      <p style={{color : "green",fontSize : "800",fontWeight : "800"}}>{state} </p>

      <mySecondContext.Provider value={{ setState }}>
        <B />
      </mySecondContext.Provider>
    </div>
  );
}

export default A;