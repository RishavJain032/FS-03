import { useContext } from "react";
import mySecondContext from "../ContextApi-2/Context";

function D(props) {
  const { data } = useContext(mySecondContext);
  return (
    <div>
      <h2>D Component</h2>
      <p style={{ color: "green",fontSize : "800",fontWeight : "800"}}>{data}</p>
    </div>
  );
}

export default D;