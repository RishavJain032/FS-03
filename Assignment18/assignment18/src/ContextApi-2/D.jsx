import { useContext, useState } from "react";
import mySecondContext from "./Context";

const D =() => {
  const { setState } = useContext(mySecondContext);
  const [dvalue, setDvalue] = useState();
  return (
    <div>
      <h2>D Component</h2>
      <input
        type="text"
        onChange={(e) => {setDvalue(e.target.value)}} placeholder="Enter Some Text"/>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => { setState(dvalue)}}>
        Send Data
      </button>
    </div>
  );
}

export default D;